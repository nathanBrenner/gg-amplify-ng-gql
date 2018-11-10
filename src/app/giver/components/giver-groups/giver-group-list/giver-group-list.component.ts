import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GiverGroup } from './../../../../giver';

@Component({
  selector: 'gg-giver-group-list',
  templateUrl: './giver-group-list.component.html',
  styleUrls: ['./giver-group-list.component.scss']
})
export class GiverGroupListComponent {
  @Input()
  groups: GiverGroup[];

  @Output()
  deleteGiverGroup: EventEmitter<GiverGroup> = new EventEmitter();

  @Output()
  selectGiverGroup: EventEmitter<GiverGroup> = new EventEmitter();

}
