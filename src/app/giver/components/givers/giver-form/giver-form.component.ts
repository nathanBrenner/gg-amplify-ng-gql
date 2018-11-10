import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid/v4';
import { Giver } from './../../../../giver';

@Component({
  selector: 'gg-giver-form',
  templateUrl: './giver-form.component.html',
  styleUrls: ['./giver-form.component.scss']
})
export class GiverFormComponent implements OnInit, OnChanges {
  @Input()
  givers: Giver[];

  @Input()
  selectedGiver: Giver;

  @Input()
  showGiverList: boolean;

  @Output()
  saveGiver: EventEmitter<Giver> = new EventEmitter();

  @Output()
  toggleGiverList: EventEmitter<boolean> = new EventEmitter();

  @Output()
  updateGiver: EventEmitter<Giver> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.form && this.selectedGiver) {
      this.setForm();
    }
  }

  configActionGrid() {
    return { 'grid-template-columns': this.canCreateGroup() ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)' };
  }

  canCreateGroup(): boolean {
    return this.givers.length > 2 && !(this.givers.length % 2);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      spouse: new FormControl('')
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const id = this.selectedGiver ? this.selectedGiver.id : uuid();
      const giver = { ...this.form.value, id };
      this.selectedGiver ? this.updateGiver.emit(giver) : this.saveGiver.emit(giver);
      this.form.setValue({name: '', spouse: ''});
    }
  }

  setForm(): void {
    this.form.setValue({name: this.selectedGiver.name, spouse: this.selectedGiver.spouse});
  }
}
