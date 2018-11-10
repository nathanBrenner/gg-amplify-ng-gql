import { Injectable } from '@angular/core';
import { GiverGroup } from '../../giver';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiverGroupService {
  private giverGroups: Subject<GiverGroup[]> = new Subject();

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
