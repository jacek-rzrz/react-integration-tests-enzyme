import {shoppingListReducer} from "./shoppingListReducer";
import {replaceItems} from "./actions";

it('initializes state with empty array', () => {
    const initialState = shoppingListReducer(undefined, {type: 'init'});
    expect(initialState).toEqual([]);
});

it('replaces items on REPLACE_ITEMS', () => {
    const state = [{id: 9, name: 'apples'}];
    const action = replaceItems([{id: 10, name: 'bananas'}, {id: 11, name: 'carrots'}]);
    const newState = shoppingListReducer(state, action);
    expect(newState).toEqual([{id: 10, name: 'bananas'}, {id: 11, name: 'carrots'}]);
});

it('appends items on APPEND_ITEM', () => {
    const state = [{id: 8, name: 'apples'}];
    const action = {type: 'APPEND_ITEM', payload: {id: 9, name: 'bananas'}};
    const newState = shoppingListReducer(state, action);
    expect(newState).toEqual([{id: 8, name: 'apples'}, {id: 9, name: 'bananas'}]);
});
