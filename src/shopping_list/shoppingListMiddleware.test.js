import mockStore from 'redux-mock-store';
import {shoppingListMiddleware} from "./shoppingListMiddleware";
import {appendItem, createItem, replaceItems} from "./actions";
import {asyncFlush, mockApi} from "../test_support";
import {push} from "react-router-redux";
import {locationChange} from "../utils/locationChange";

let store;

beforeEach(async () => {
    store = mockStore([shoppingListMiddleware])({});
});

describe('when a new item is created', () => {

    beforeEach(() => {
        const action = createItem({name: 'pears'});
        mockApi.mockPostItem({id: 10, name: 'pears'});
        store.dispatch(action);
    });

    it('appends the item to the list immediately', () => {
        expect(store.getActions()).toContainEqual(appendItem({id: 'pears', name: 'pears'}));
    });

    describe('when a new item is successfully posted to the API', () => {

        beforeEach(async () => {
            mockApi.mockGetItems([]);
            await asyncFlush();
        });

        it('navigates to the home page', () => {
            expect(store.getActions()).toContainEqual(push('/'));
        });
    });
});

describe('when location changes to home page', () => {

    beforeEach(async () => {
        mockApi.mockGetItems([{id: 11, name: 'apples'}, {id: 12, name: 'bananas'}]);
        const action = locationChange({pathname: '/'});

        store.dispatch(action);

        await asyncFlush();
    });

    it('fetches items from the api', () => {
        expect(store.getActions()).toContainEqual(replaceItems([{id: 11, name: 'apples'}, {id: 12, name: 'bananas'}]));
    });

});