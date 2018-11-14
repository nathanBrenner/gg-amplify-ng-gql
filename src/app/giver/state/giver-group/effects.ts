import { GiverGroup } from './../../../giver';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GiverGroupService } from './giver-group.service';
import {
  GET_GIVER_GROUPS_REQ,
  POST_GIVER_GROUP_REQ,
  PUT_GIVER_GROUP_REQ,
  DELETE_GIVER_GROUP_REQ,
  GetGiverGroupsRes,
  PostGiverGroupReq,
  PutGiverGroupReq,
  DeleteGiverGroupReq,
  PostGiverGroupRes,
  PutGiverGroupRes,
  DeleteGiverGroupRes,
} from './actions';

@Injectable()
export class GiverGroupEffects {
  @Effect()
  getGiverGroups$: Observable<Action> = this.actions$.pipe(
    ofType(GET_GIVER_GROUPS_REQ),
    mergeMap(action =>
      this.giverGroupService.get().pipe(
        map((data: GiverGroup[]) => new GetGiverGroupsRes(data)),
        catchError((err) => of({ type: 'GET_GIVER_GROUPS_FAILED', payload: err }))
      )
    )
  );

  @Effect()
  postGiver$: Observable<Action> = this.actions$.pipe(
    ofType(POST_GIVER_GROUP_REQ),
    map(({ payload }: PostGiverGroupReq) => new PostGiverGroupRes(payload))
    // mergeMap(({ payload }: PostGiverGroupReq) =>
    //   this.giverGroupService.post(payload).pipe(
    //     map((data: GiverGroup) => new PostGiverGroupRes(data)),
    //     catchError((err) => of({ type: 'POST_GIVER_GROUP_FAILED', payload: err }))
    //   )
    // )
  );

  @Effect()
  putGiver$: Observable<Action> = this.actions$.pipe(
    ofType(PUT_GIVER_GROUP_REQ),
    map(({ payload }: PutGiverGroupReq) => new PutGiverGroupRes(payload)),
    // mergeMap(({ payload }: PutGiverGroupReq) =>
    //   this.giverGroupService.put(payload).pipe(
    //     map((data: GiverGroup) => new PutGiverGroupRes(data)),
    //     catchError((err) => of({ type: 'GUT_GIVER_GROUP_FAILED', payload: err }))
    //   )
    // )
  );

  @Effect()
  deleteGiver$: Observable<Action> = this.actions$.pipe(
    ofType(DELETE_GIVER_GROUP_REQ),
    map(({ payload }: DeleteGiverGroupReq) => new DeleteGiverGroupRes(payload)),
    // mergeMap(({ payload }: DeleteGiverGroupReq) =>
    //   this.giverGroupService.delete(payload).pipe(
    //     map((data: GiverGroup) => new DeleteGiverGroupRes(data)),
    //     catchError((err) => of({ type: 'DELETE_GIVER_FAILED', payload: err }))
    //   )
    // )
  );

  constructor(private giverGroupService: GiverGroupService, private actions$: Actions) {}
}
