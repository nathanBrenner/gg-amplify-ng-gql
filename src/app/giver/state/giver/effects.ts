import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GiverService } from './giver.service';
import {
  GET_GIVERS_REQ,
  GET_GIVERS_RES,
  POST_GIVER_REQ,
  PostGiverReq,
  POST_GIVER_RES,
  PUT_GIVER_REQ,
  PutGiverReq,
  PUT_GIVER_RES,
  DELETE_GIVER_REQ,
  DeleteGiverReq,
  DELETE_GIVER_RES
} from './actions';

@Injectable()
export class GiverEffects {
  @Effect()
  getGivers$: Observable<Action> = this.actions$.pipe(
    ofType(GET_GIVERS_REQ),
    mergeMap(action =>
      this.giverService.get().pipe(
        map(data => ({ type: GET_GIVERS_RES, payload: data })),
        catchError((err) => of({ type: 'GET_GIVERS_FAILED', payload: err }))
      )
    )
  );

  @Effect()
  postGiver$: Observable<Action> = this.actions$.pipe(
    ofType(POST_GIVER_REQ),
    mergeMap(({ payload }: PostGiverReq) =>
      this.giverService.post(payload).pipe(
        map(data => ({ type: POST_GIVER_RES, payload: data })),
        catchError((err) => of({ type: 'POST_GIVER_FAILED', payload: err }))
      )
    )
  );

  @Effect()
  putGiver$: Observable<Action> = this.actions$.pipe(
    ofType(PUT_GIVER_REQ),
    mergeMap(({ payload }: PutGiverReq) =>
      this.giverService.put(payload).pipe(
        map(data => ({ type: PUT_GIVER_RES, payload: data })),
        catchError((err) => of({ type: 'GUT_GIVER_FAILED', payload: err }))
      )
    )
  );

  @Effect()
  deleteGiver$: Observable<Action> = this.actions$.pipe(
    ofType(DELETE_GIVER_REQ),
    mergeMap(({ payload }: DeleteGiverReq) =>
      this.giverService.delete(payload).pipe(
        map(data => ({ type: DELETE_GIVER_RES, payload: data })),
        catchError((err) => of({ type: 'DELETE_GIVER_FAILED', payload: err }))
      )
    )
  );

  constructor(private giverService: GiverService, private actions$: Actions) {}
}
