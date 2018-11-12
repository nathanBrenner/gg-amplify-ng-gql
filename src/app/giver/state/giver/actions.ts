import { Action } from '@ngrx/store';
import { Giver } from '../../../giver';

export const GET_GIVERS_REQ = '[giver] get all request';
export class GetGiversReq implements Action {
  readonly type = GET_GIVERS_REQ;
}

export const GET_GIVERS_RES = '[giver] get all response';
export class GetGiversRes implements Action {
  readonly type = GET_GIVERS_RES;
  constructor(public payload: Giver[]) {}
}

export const POST_GIVER_REQ = '[giver] post request';
export class PostGiverReq implements Action {
  readonly type = POST_GIVER_REQ;
  constructor(public payload: Giver) {}
}

export const POST_GIVER_RES = '[giver] post response';
export class PostGiverRes implements Action {
  readonly type = POST_GIVER_RES;
  constructor(public payload: Giver) {}
}

export const PUT_GIVER_REQ = '[giver] put request';
export class PutGiverReq implements Action {
  readonly type = PUT_GIVER_REQ;
  constructor(public payload: Giver) {}
}

export const PUT_GIVER_RES = '[giver] put response';
export class PutGiverRes implements Action {
  readonly type = PUT_GIVER_RES;
  constructor(public payload: Giver) {}
}

export const DELETE_GIVER_REQ = '[giver] delete request';
export class DeleteGiverReq implements Action {
  readonly type = DELETE_GIVER_REQ;
  constructor(public payload: Giver) {}
}

export const DELETE_GIVER_RES = '[giver] delete response';
export class DeleteGiverRes implements Action {
  readonly type = DELETE_GIVER_RES;
  constructor(public payload: Giver) {}
}

export type Actions =
  | GetGiversReq
  | GetGiversRes
  | PostGiverReq
  | PostGiverRes
  | PutGiverReq
  | PutGiverRes
  | DeleteGiverReq
  | DeleteGiverRes;
