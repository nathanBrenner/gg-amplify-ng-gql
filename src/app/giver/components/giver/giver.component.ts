import { DeleteGiverReq, GetGiversReq, PostGiverReq, PutGiverReq } from './../../state/giver/actions';
import { GiverGroupService } from '../../state/giver-group/giver-group.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AmplifyService } from 'aws-amplify-angular';
import * as uuid from 'uuid/v4';
import { Giver, GiverGroup } from 'src/app/giver';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../state/index';
import { GetGiverGroupsReq, PostGiverGroupReq, PutGiverGroupReq, DeleteGiverGroupReq } from '../../state/giver-group/actions';

@Component({
  selector: 'gg-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.scss']
})
export class GiverComponent implements OnInit {
  attempts = 0;
  givers$: Observable<Giver[]>;
  giverGroups$: Observable<GiverGroup[]>;
  selectedGiver: Giver;
  selectedGiverGroup: GiverGroup;
  showGiverList = false;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public amplifyService: AmplifyService,
    private store$: Store<State>,
    private giverGroupService: GiverGroupService,
  ) {}

  ngOnInit() {
    this.givers$ = this.store$.pipe(select('giver'));
    this.giverGroups$ = this.store$.pipe(select('giverGroup'));
    this.getGiverGroups();
    this.getGivers();
  }

  /**
   * Giver CRUD
   */
  deleteGiver(entity: Giver): void {
    this.store$.dispatch(new DeleteGiverReq(entity));
    this.showSnackbar(`Deleted ${entity.name}`);
  }

  getGivers(): void {
    this.store$.dispatch(new GetGiversReq());
  }

  postGiver(entity: Giver): void {
    this.store$.dispatch(new PostGiverReq(entity));
    this.showSnackbar('Giver created');
  }

  async putGiver(entity: Giver) {
    this.store$.dispatch(new PutGiverReq(entity));
    this.showSnackbar(`${entity.name} has been updated`);
    this.selectedGiver = null;
  }

  /**
   * GiverGroup CRUD
   */

  deleteGiverGroup(entity: GiverGroup): void {
    this.store$.dispatch(new DeleteGiverGroupReq(entity));
  }

  getGiverGroups() {
    this.store$.dispatch(new GetGiverGroupsReq());
  }

  postGiverGroup(group: GiverGroup): void {
    this.store$.dispatch(new PostGiverGroupReq(group));
  }

  putGiverGroup(entity: GiverGroup): void {
    this.store$.dispatch(new PutGiverGroupReq(entity));
  }

  saveGroup({ name, givers, id, currentGivers }: { name: string, id?: string, givers: string[], currentGivers: Giver[]}): void {
    // from the list of all givers, return a list of givers that have been selected to be in this new group
    const selectedGivers = currentGivers.filter(giver => givers.includes(giver.id));

    // if there are an even number of selected givers
    // (a group of odd number of givers would never assign every giver another giver, someone would be left out)
    if (!(selectedGivers.length % 2)) {
      // assign a member to each giver in the group
      const newGroup = this.randomizeGroup(selectedGivers);

      // Not all groups will get every giver an assigned giver.  This is an array of
      const assignedTos = newGroup.map(giver => giver.assignedTo).filter(Boolean);

      // increment the number of attempts this function has been called by itself
      this.attempts = ++this.attempts;

      if (this.attempts === 9) {
        // The random selection has tried 9 times without getting a random order
        this.showSnackbar('Unable to create group');
      }

      if (assignedTos.length !== 0 && this.attempts < 10) {
        // there are all unique pairs and fewer than 10 attempts to randomize givers with eachother

        // this should work for both update and add. If there was an id in the payload, update, otherwise add
        id
          ? this.putGiverGroup({ name, id, givers: newGroup })
          : this.postGiverGroup({ name, id: uuid(), givers: newGroup });

        this.toggleGiverList(false);
        this.attempts = 0;
      } else if (this.attempts < 10) {
        this.saveGroup({ name, givers, currentGivers });
      }
    } else {
      this.showSnackbar('Unable to create group');
    }
  }

  assignGiver(giver: Giver, group: Giver[]): Giver {
    group = group.filter(loopedGiver => loopedGiver.name !== giver.exclude && loopedGiver.name !== giver.name);
    const randomNumber = Math.floor(Math.random() * group.length);
    const assignedTo = group[randomNumber];
    return { ...giver, assignedTo: assignedTo ? assignedTo : null };
  }

  randomizeGroup(giverGroup: Giver[]): Giver[] {
    if (!(giverGroup.length  % 2)) {
      let available = giverGroup;
      return  giverGroup.map(giver => {
        const updatedGiver = this.assignGiver(giver, available);
        available = available.filter(availableGiver => {
          return updatedGiver.assignedTo
            ? availableGiver.id !== updatedGiver.assignedTo.id
            : null;
        });
        return updatedGiver;
      });
    }
  }

  selectGiver(giver: Giver): void {
    this.selectedGiver = giver;
  }

  selectGiverGroup(group): void {
    this.toggleGiverList(true);
    this.selectedGiverGroup = group;
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'dismiss', {
      duration: 3000,
    });
  }

  toggleGiverList(isVisible: boolean): void {
    this.showGiverList = isVisible;
  }

  updateGiverGroup(updatedGiverGroup: {id: string, name: string, givers: string[], currentGivers: Giver[]}): void {
    this.saveGroup(updatedGiverGroup);
  }

  logout() {
    this.amplifyService.auth().signOut().then(data => this.router.navigate(['/']));
  }
}
