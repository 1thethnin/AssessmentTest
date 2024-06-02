import { Item } from "../reducers/homeReducer";
import { AppActions, SET_LIST, SET_SEARCH_ITEM } from "./actionTypes";

export const setList = (list: Item[]) => ({
  type: SET_LIST,
  payload: list,
});

export const setSearchItem = (name: string) => ({
  type: SET_SEARCH_ITEM,
  payload: name,
});