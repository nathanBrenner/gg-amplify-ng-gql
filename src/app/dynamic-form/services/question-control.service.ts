import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { QuestionBase } from './question';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = new FormControl(question.value);
    });
    return new FormGroup(group);
  }
}
