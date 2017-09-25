import {appendItem, createItem, replaceItems} from "./actions";
import {push} from 'react-router-redux';
import {locationChange} from "../utils";

const API_URI = 'http://localhost:4000/';

export const shoppingListMiddleware = store => next => action => {

    next(action);

    if (action.type === locationChange.type && action.payload.pathname === '/') {
        fetch(API_URI)
            .then(response => response.json())
            .then(items => store.dispatch(replaceItems(items)));
    }

    if (action.type === createItem.type) {
        store.dispatch(appendItem({name: action.payload.name, id: action.payload.name}));
        fetch(API_URI, {method: 'POST', body: JSON.stringify(action.payload)})
            .then(response => response.json())
            .then(() => store.dispatch(push('/')));
    }
};