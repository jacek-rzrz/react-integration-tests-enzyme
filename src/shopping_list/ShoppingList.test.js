import React from 'react';
import mockStore from 'redux-mock-store';
import {mount} from 'enzyme';
import {ShoppingList} from "./ShoppingList";
import {Provider} from 'react-redux';

it('renders items from the store', () => {
    const store = mockStore()({
        shoppingList: [{id: 3, name: 'bananas'}, {id: 7, name: 'carrots'}]
    });

    const screen = mount(<Provider store={store}><ShoppingList/></Provider>);

    const itemNames = screen.find('[data-qa="item-name"]').map(item => item.text());
    expect(itemNames).toEqual(['bananas', 'carrots']);
});