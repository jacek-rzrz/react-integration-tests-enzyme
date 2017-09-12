
import {shoppingListReducer} from "./shoppingListReducer";

it('initializes state with empty array', () => {
    const initialState = shoppingListReducer(undefined, {type: 'init'});
    expect(initialState).toEqual([]);
});

it('appends items on APPEND_ITEM', () => {
    const state = [{id: 8, name: 'apples'}];
    const action = {type: 'APPEND_ITEM', payload: {id: 9, name: 'bananas'}};
    const newState = shoppingListReducer(state, action);
    expect(newState).toEqual([{id: 8, name: 'apples'},{id: 9, name: 'bananas'}]);
});
