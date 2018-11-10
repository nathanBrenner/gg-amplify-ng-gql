import { Injectable } from '@angular/core';
import { Giver } from '../../giver';

@Injectable({
  providedIn: 'root'
})
export class GiverService {

  get(): Promise<Giver[]> {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }

  post(entity: Giver): Promise<Giver> {
    return new Promise((resolve, reject) => {
      resolve(entity);
    });
  }

  put(entity: Giver): Promise<Giver> {
    return new Promise((resolve, reject) => {
      resolve(entity);
    });
  }

  delete(entity: Giver): Promise<Giver> {
    return new Promise((resolve, reject) => {
      resolve(entity);
    });
  }
}
