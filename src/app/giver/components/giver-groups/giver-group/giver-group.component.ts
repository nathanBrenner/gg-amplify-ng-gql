import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GiverGroup } from '../../../../giver';

@Component({
  selector: 'gg-giver-group',
  templateUrl: './giver-group.component.html',
  styleUrls: ['./giver-group.component.scss']
})
export class GiverGroupComponent {
  @Input()
  group: GiverGroup;

  @Output()
  deleteGiverGroup: EventEmitter<any> = new EventEmitter();

  @Output()
  selectGiverGroup: EventEmitter<any> = new EventEmitter();

}
