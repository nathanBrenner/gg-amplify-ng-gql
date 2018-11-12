import { ActionReducerMap } from '@ngrx/store';
import { giverReducer } from './giver/reducer';
import { Giver } from '../../giver';

export interface State {
  giver: Giver[];
}

export const reducers: ActionReducerMap<State> = {
  giver: giverReducer,
};
