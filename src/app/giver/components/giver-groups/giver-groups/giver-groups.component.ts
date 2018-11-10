import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Giver, GiverGroup } from './../../../../giver';

@Component({
  selector: 'gg-giver-groups',
  templateUrl: './giver-groups.component.html',
  styleUrls: ['./giver-groups.component.scss']
})
export class GiverGroupsComponent {
  @Input()
  givers: Giver[];

  @Input()
  groups: GiverGroup[];

  @Input()
  selectedGiverGroup: GiverGroup;

  @Input()
  showGiverList: boolean;

  @Output()
  deleteGiverGroup: EventEmitter<GiverGroup> = new EventEmitter();

  @Output()
  saveGroup: EventEmitter<{name: string, givers: string[]}> = new EventEmitter();

  @Output()
  selectGiverGroup: EventEmitter<GiverGroup> = new EventEmitter();

  @Output()
  toggleGiverList = new EventEmitter();

  @Output()
  updateGiverGroup: EventEmitter<GiverGroup> = new EventEmitter();

}
