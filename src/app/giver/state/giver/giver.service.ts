import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { listGivers } from '../../../../graphql/queries';
import { createGiver, updateGiver, deleteGiver } from '../../../../graphql/mutations';
import { Giver } from '../../../giver';

@Injectable({
  providedIn: 'root'
})
export class GiverService {

  get(): Observable<Giver[]> {
    return from(API.graphql(graphqlOperation(listGivers)))
      .pipe(pluck('data', 'listGivers', 'items'));
  }

  post(entity: Giver): Observable<Giver> {
    return from(API.graphql(graphqlOperation(createGiver, { input: entity })))
      .pipe(pluck('data', 'createGiver'));
  }

  put(entity: Giver): Observable<Giver> {
    return from(API.graphql(graphqlOperation(updateGiver, { input: entity })))
      .pipe(pluck('data', 'updateGiver'));
  }

  delete(entity: Giver): Observable<Giver> {
    return from(API.graphql(graphqlOperation(deleteGiver, { input: {id: entity.id } })))
      .pipe(pluck('data', 'deleteGiver'));
  }
}
