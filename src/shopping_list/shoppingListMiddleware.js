import {appendItem, createItem} from "./actions";

export const shoppingListMiddleware = store => next => action => {

    next(action);

    if(action.type === createItem.type) {
        const name = action.payload.name;
        store.dispatch(appendItem({ id: name, name }));
    }

};