import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Giver } from './../../../../giver';

@Component({
  selector: 'gg-giver-list',
  templateUrl: './giver-list.component.html',
  styleUrls: ['./giver-list.component.scss']
})
export class GiverListComponent {
  @Input()
  givers: Giver[];

  @Output()
  selectGiver: EventEmitter<Giver> = new EventEmitter();

  @Output()
  deleteGiver: EventEmitter<Giver> = new EventEmitter();

}
