import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listGivers } from '../../../graphql/queries';
import { createGiver, updateGiver, deleteGiver } from '../../../graphql/mutations';
import { Giver } from '../../giver';

@Injectable({
  providedIn: 'root'
})
export class GiverService {

  async get(): Promise<Giver[] | string> {
    try {
      const givers = await API.graphql(graphqlOperation(listGivers));
      return givers['data'].listGivers.items;
    } catch (error) {
      return error.errors[0].message;
    }
  }

  async post(entity: Giver): Promise<Giver> {
    try {
      const giver = await API.graphql(graphqlOperation(createGiver, { input: entity }));
      return giver['data'].createGiver;
    } catch (error) {
      return error.errors[0].message;
    }
  }

  async put(entity: Giver): Promise<Giver | string> {
    try {
      const giver = await API.graphql(graphqlOperation(updateGiver, { input: entity }));
      return giver['data'].updateGiver;
    } catch (error) {
      return error.errors[0].message;
    }
  }

  async delete(entity: Giver): Promise<Giver | string> {
    try {
      const giver = await API.graphql(graphqlOperation(deleteGiver, { input: entity }));
      return giver['data'].deleteGiver;
    } catch (error) {
      return error.errors[0].message;
    }
  }
}
