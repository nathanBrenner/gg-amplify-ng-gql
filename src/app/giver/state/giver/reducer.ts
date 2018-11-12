import { Actions, GET_GIVERS_RES, POST_GIVER_RES, PUT_GIVER_RES, DELETE_GIVER_RES } from './actions';
import { Giver } from '../../../giver';

export function giverReducer(state: Giver[] = [], action: Actions): Giver[] {
  switch (action.type) {
    case GET_GIVERS_RES: {
      return [ ...state, ...action.payload];
    }
    case POST_GIVER_RES: {
      return [ ...state, action.payload ];
    }
    case PUT_GIVER_RES: {
      return state.map(giver => giver.id === action.payload.id ? action.payload : giver);
    }
    case DELETE_GIVER_RES: {
      return state.filter(giver => giver.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
}
