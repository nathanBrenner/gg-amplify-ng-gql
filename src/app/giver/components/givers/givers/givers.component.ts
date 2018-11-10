import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Giver } from './../../../../giver';

@Component({
  selector: 'gg-givers',
  templateUrl: './givers.component.html',
  styleUrls: ['./givers.component.scss']
})
export class GiversComponent {
  @Input()
  givers: Giver[];

  @Input()
  selectedGiver: Giver;

  @Input()
  showGiverList: boolean;

  @Output()
  deleteGiver: EventEmitter<Giver> = new EventEmitter();

  @Output()
  saveGiver: EventEmitter<Giver> = new EventEmitter();

  @Output()
  selectGiver: EventEmitter<Giver> = new EventEmitter();

  @Output()
  toggleGiverList: EventEmitter<boolean> = new EventEmitter();

  @Output()
  updateGiver: EventEmitter<Giver> = new EventEmitter();

}
