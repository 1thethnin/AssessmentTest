import { AppActions } from "../actions/actionTypes";

export interface Item {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

interface ItemState {
  items: Item[];
  searchItem: null | string;
}

const initialState: ItemState = {
  items: [],
  searchItem: null,
};

const homeReducer = (state = initialState, action: AppActions): ItemState => {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, items: action.payload };
    case 'SET_SEARCH_ITEM':
      return { ...state, searchItem: action.payload };
    default:
      return state;
  }
};

export default homeReducer;


