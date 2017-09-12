import mockStore from 'redux-mock-store';
import {shoppingListMiddleware} from "./shoppingListMiddleware";
import {appendItem, createItem} from "./actions";

it('creates items locally on `CREATE_ITEM`', () => {

    const store = mockStore([shoppingListMiddleware])({});

    const action = createItem({ name: 'pears' }) ;

    store.dispatch(action);

    expect(store.getActions()).toContainEqual(appendItem({ id: 'pears', name: 'pears' }));
});