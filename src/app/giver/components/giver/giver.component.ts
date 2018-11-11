import { GiverGroupService } from './../../services/giver-group.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AmplifyService } from 'aws-amplify-angular';
import * as uuid from 'uuid/v4';
import { Giver, GiverGroup } from 'src/app/giver';
import { GiverService } from '../../services/giver.service';
import { API, graphqlOperation } from 'aws-amplify';
import { listGivers } from '../../../../graphql/queries.js';

@Component({
  selector: 'gg-giver',
  templateUrl: './giver.component.html',
  styleUrls: ['./giver.component.scss']
})
export class GiverComponent implements OnInit {
  attempts = 0;
  givers: Giver[] = [];
  groups: GiverGroup[] = [];
  selectedGiver: Giver;
  selectedGiverGroup: GiverGroup;
  showGiverList = false;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public amplifyService: AmplifyService,
    private giverService: GiverService,
    private giverGroupService: GiverGroupService,
  ) {}

  ngOnInit() {
    this.getGivers();
    this.getGiverGroups();
  }

  /**
   * Giver CRUD
   */
  async deleteGiver(entity: Giver): Promise<void> {
    const response = await this.giverService.delete(entity) as Giver;

    if (typeof response === 'string') {
      this.showSnackbar(response);
    }
    this.givers = this.givers.filter(giver => giver.id !== entity.id);
    this.showSnackbar(`Deleted ${entity.name}`);
  }

  async getGivers(): Promise<void> {
    const givers = await this.giverService.get();

    if (typeof givers === 'string') {
      this.showSnackbar(givers);
    }
    this.showSnackbar('Givers loaded');
    this.givers = givers as Giver[];
  }

  async postGiver(entity: Giver) {
    const response = await this.giverService.post(entity) as Giver;

    if (typeof response === 'string') {
      this.showSnackbar(response);
    }
    this.showSnackbar('Giver created');
    this.givers = [...this.givers, response];
  }

  async putGiver(entity: Giver) {
    const response = await this.giverService.put(entity) as Giver;

    if (typeof response === 'string') {
      this.showSnackbar(response);
    }
    this.showSnackbar(`${response.name} has been updated`);
    this.givers = this.givers.map(giver => giver.id === response.id ? response : giver);
    this.selectedGiver = null;
  }

  /**
   * GiverGroup CRUD
   */

  deleteGiverGroup(deletedGiverGroup: GiverGroup): void {
    this.giverGroupService.delete(deletedGiverGroup).then(res => {
      this.groups = this.groups.filter(group => group.id !== deletedGiverGroup.id);
    }).catch(console.error);
  }

  getGiverGroups() {
    this.giverGroupService.get().then(groups => {
      this.groups = groups;
    }).catch(console.error);
  }

  postGiverGroup(group: GiverGroup): void {
    this.giverGroupService.post(group).then((res) => {
      this.groups = [...this.groups, group];
    }).catch(console.error);
  }

  putGiverGroup(updatedGroup: GiverGroup): void {
    this.giverGroupService.put(updatedGroup).then((res) => {
      this.groups = this.groups.map(group => group.id === updatedGroup.id ? updatedGroup : group);
    }).catch(console.error);
  }

  saveGroup({ name, givers, id }: { name: string, id?: string, givers: string[]}): void {
    // from the list of all givers, return a list of givers that have been selected to be in this new group
    const selectedGivers = this.givers.filter(giver => givers.includes(giver.id));

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
        // this.groups = id
        //   ? this.groups.map(group => group.id === id ? { name, id, givers: newGroup } : group)
        //   : [ ...this.groups, { name, id: uuid(), givers: newGroup }];
        id
          ? this.putGiverGroup({ name, id, givers: newGroup })
          : this.postGiverGroup({ name, id: uuid(), givers: newGroup });

        this.toggleGiverList(false);
        this.attempts = 0;
      } else if (this.attempts < 10) {
        this.saveGroup({ name, givers });
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

  updateGiverGroup(updatedGiverGroup: {id: string, name: string, givers: string[]}): void {
    this.saveGroup(updatedGiverGroup);
  }

  logout() {
    this.amplifyService.auth().signOut().then(data => this.router.navigate(['/']));
  }
}
