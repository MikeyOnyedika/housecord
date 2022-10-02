import { Reducer } from 'react';

export interface Me {
  id: string;
  name: string;
  img: string;
}

type MeReducerAction = {
  payload: string;
};

export interface MeReducer extends Reducer<Me, MeReducerAction> {}
