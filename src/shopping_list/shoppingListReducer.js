import {appendItem, replaceItems} from './actions';

export const shoppingListReducer = (state = [], action) => {

    if (action.type === replaceItems.type) {
        return action.payload;
    }


    if (action.type === appendItem.type) {
        return [...state, action.payload];
    }

    return state;
};