import { AppActions } from '../actions/actionTypes';
import { setList, setSearchItem } from '../actions/homeAction';
import homeReducer, { Item } from './homeReducer';


describe('homeReducer', () => {
    it('should return the initial state', () => {
        const mockAction: AppActions = { type: 'SET_LIST' || 'SET_SEARCH_ITEM', payload: [] };
        expect(homeReducer(undefined, mockAction)).toEqual({
            items: [],
            searchItem: null,
        });
    });

    it('should handle SET_LIST', () => {
        const items: Item[] = [
            { bananas: 5, lastDayPlayed: '2023-01-01', longestStreak: 10, name: 'Item 1', stars: 3, subscribed: true, uid: '1' },
            { bananas: 3, lastDayPlayed: '2023-01-02', longestStreak: 5, name: 'Item 2', stars: 4, subscribed: false, uid: '2' },
        ];
        const action = setList(items);
        const initialState = {
            items,
            searchItem: null,
        };
        const newState = homeReducer(initialState, action);
        expect(newState).toEqual({
            items,
            searchItem: null,
        });
    });

    it('should handle SET_SEARCH_ITEM', () => {
        expect(homeReducer(undefined, setSearchItem('Item 1'))).toEqual({
            items: [],
            searchItem: 'Item 1',
        });

        expect(homeReducer(undefined, setSearchItem(''))).toEqual({
            items: [],
            searchItem: '',
        });
    });
});