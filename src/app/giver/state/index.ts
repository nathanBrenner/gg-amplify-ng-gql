import { ActionReducerMap } from '@ngrx/store';
import { giverReducer } from './giver/reducer';
import { Giver, GiverGroup } from '../../giver';
import { giverGroupReducer } from './giver-group/reducer';

export interface State {
  giver: Giver[];
  giverGroup: GiverGroup[];
}

export const reducers: ActionReducerMap<State> = {
  giver: giverReducer,
  giverGroup: giverGroupReducer,
};
