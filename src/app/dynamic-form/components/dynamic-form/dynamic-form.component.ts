import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../services/question';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'gg-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()
  questions: QuestionBase<any>[] = [];

  @Output()
  submit = new EventEmitter();

  form: FormGroup;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
      this.form.reset();
    }
  }
}
