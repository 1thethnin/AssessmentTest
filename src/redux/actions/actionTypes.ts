import { Item } from "../reducers/homeReducer";

export const SET_LIST = 'SET_LIST';
export const SET_SEARCH_ITEM = 'SET_SEARCH_ITEM';

interface SetListAction {
  type: typeof SET_LIST;
  payload: Item[];
}

interface SetSearchItemAction {
  type: typeof SET_SEARCH_ITEM;
  payload: string;
}

export type AppActions = SetListAction | SetSearchItemAction;