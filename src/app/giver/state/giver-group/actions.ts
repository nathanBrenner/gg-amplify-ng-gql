import { Action } from '@ngrx/store';
import { GiverGroup } from '../../../giver';

export const GET_GIVER_GROUPS_REQ = '[giver group] get all request';
export class GetGiverGroupsReq implements Action {
  readonly type = GET_GIVER_GROUPS_REQ;
}

export const GET_GIVER_GROUPS_RES = '[giver group] get all response';
export class GetGiverGroupsRes implements Action {
  readonly type = GET_GIVER_GROUPS_RES;
  constructor(public payload: GiverGroup[]) {}
}

export const POST_GIVER_GROUP_REQ = '[giver group] post request';
export class PostGiverGroupReq implements Action {
  readonly type = POST_GIVER_GROUP_REQ;
  constructor(public payload: GiverGroup) {}
}

export const POST_GIVER_GROUP_RES = '[giver group] post response';
export class PostGiverGroupRes implements Action {
  readonly type = POST_GIVER_GROUP_RES;
  constructor(public payload: GiverGroup) {}
}

export const PUT_GIVER_GROUP_REQ = '[giver group] put request';
export class PutGiverGroupReq implements Action {
  readonly type = PUT_GIVER_GROUP_REQ;
  constructor(public payload: GiverGroup) {}
}

export const PUT_GIVER_GROUP_RES = '[giver group] put response';
export class PutGiverGroupRes implements Action {
  readonly type = PUT_GIVER_GROUP_RES;
  constructor(public payload: GiverGroup) {}
}

export const DELETE_GIVER_GROUP_REQ = '[giver group] delete request';
export class DeleteGiverGroupReq implements Action {
  readonly type = DELETE_GIVER_GROUP_REQ;
  constructor(public payload: GiverGroup) {}
}

export const DELETE_GIVER_GROUP_RES = '[giver group] delete response';
export class DeleteGiverGroupRes implements Action {
  readonly type = DELETE_GIVER_GROUP_RES;
  constructor(public payload: GiverGroup) {}
}

export type Actions =
  | GetGiverGroupsReq
  | GetGiverGroupsRes
  | PostGiverGroupReq
  | PostGiverGroupRes
  | PutGiverGroupReq
  | PutGiverGroupRes
  | DeleteGiverGroupReq
  | DeleteGiverGroupRes;
