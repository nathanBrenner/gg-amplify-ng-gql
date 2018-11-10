import { Giver, GiverGroup } from '../../giver';
import { Injectable } from '@angular/core';
import { QuestionBase, CheckboxQuestion, TextQuestion } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor() {}

  getGiverGroupQuestions(givers: Giver[] | GiverGroup): QuestionBase<any>[] {
    return this.instanceOfGiverGroup(givers)
      ? this.getGiverGrupQuestionsFromGiverGroup(givers, 1)
      : this.getGiverGrupQuestionsFromGiverArray(givers, 1);
  }

  getGiverGrupQuestionsFromGiverArray(givers: Giver[], order: number): QuestionBase<any>[] {
    const groupName: QuestionBase<any> = new TextQuestion({
      key: 'name',
      label: 'Group name',
      value: '',
      type: 'text',
      order,
    });

    const giverQuestions: QuestionBase<any>[] = givers.map(giver => {
      order++;
      return new CheckboxQuestion({
        key: giver.id,
        label: giver.name,
        value: false,
        type: 'checkbox',
        order,
      });
    });

    return [ groupName, ...giverQuestions ].sort((a, b) => a.order - b.order);
  }

  getGiverGrupQuestionsFromGiverGroup(giverGroup: GiverGroup, order: number): QuestionBase<any>[] {
    const groupName: QuestionBase<any> = new TextQuestion({
      key: 'name',
      label: 'Group name',
      value: giverGroup.name,
      type: 'text',
      order,
    });

    const giverQuestions: QuestionBase<any>[] = giverGroup.givers.map(giver => {
      order++;
      return new CheckboxQuestion({
        key: giver.id,
        label: giver.name,
        value: true,
        type: 'checkbox',
        order,
      });
    });

    return [ groupName, ...giverQuestions ].sort((a, b) => a.order - b.order);
  }

  instanceOfGiverGroup(object: GiverGroup | Giver[]): object is GiverGroup {
    return 'givers' in object;
  }
}
