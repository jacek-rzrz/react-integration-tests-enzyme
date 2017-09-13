import {appendItem, createItem, replaceItems} from "./actions";
import {push} from 'react-router-redux';
import {locationChange} from "../utils";

const API_URI = 'http://localhost:4000/';

export const shoppingListMiddleware = store => next => action => {

    next(action);

    if (action.type === locationChange.type && action.payload.pathname === '/') {
        const handleSuccess = items => {
            store.dispatch(replaceItems(items));
        };
        fetch(API_URI)
            .then(response => response.json())
            .then(handleSuccess);
    }

    if (action.type === createItem.type) {
        const handleSuccess = item => {
            store.dispatch(appendItem(item));
            store.dispatch(push('/'));
        };

        fetch(API_URI, {method: 'POST', body: JSON.stringify(action.payload)})
            .then(response => response.json())
            .then(handleSuccess);
    }
};