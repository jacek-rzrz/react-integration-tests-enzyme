import { appendItem } from './actions';

export const shoppingListReducer = (state=[], action) => {
    if(action.type === appendItem.type) {
        return [ ...state, action.payload ];
    }

    return state;
};