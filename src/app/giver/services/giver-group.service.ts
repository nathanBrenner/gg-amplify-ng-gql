import { Injectable } from '@angular/core';
import { GiverGroup } from '../../giver';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiverGroupService {

  get(): Promise<GiverGroup[]> {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }

  post(entity: GiverGroup): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  put(entity: GiverGroup): Promise<GiverGroup> {
    return new Promise((resolve, reject) => {
      resolve(entity);
    });
  }

  delete(entity: GiverGroup): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
