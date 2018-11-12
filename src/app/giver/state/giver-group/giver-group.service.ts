import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { API, graphqlOperation } from 'aws-amplify';
import { listGiverGroups } from '../../../../graphql/queries';
import { createGiverGroup, updateGiverGroup, deleteGiverGroup } from '../../../../graphql/mutations';
import { GiverGroup} from '../../../giver';

@Injectable({
  providedIn: 'root'
})
export class GiverGroupService {

  get(): Observable<GiverGroup[]> {
    return from(API.graphql(graphqlOperation(listGiverGroups)))
      .pipe(pluck('data', 'listGiverGroups', 'items'));
  }

  post(entity: GiverGroup): Observable<GiverGroup> {
    return from(API.graphql(graphqlOperation(createGiverGroup, { input: entity })))
      .pipe(pluck('data', 'createGiverGroup'));
  }

  put(entity: GiverGroup): Observable<GiverGroup> {
    return from(API.graphql(graphqlOperation(updateGiverGroup, { input: entity })))
      .pipe(pluck('data', 'updateGiver'));
  }

  delete(entity: GiverGroup): Observable<GiverGroup> {
    return from(API.graphql(graphqlOperation(deleteGiverGroup, { input: {id: entity.id } })))
      .pipe(pluck('data', 'deleteGiver'));
  }
}
