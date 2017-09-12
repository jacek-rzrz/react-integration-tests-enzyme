import React from 'react';
import { connect } from 'react-redux';

const renderShoppingList = ({items}) => (
    <ul>
        { items.map(item => <li data-qa="item-name" key={item.id}>{item.name}</li>) }
    </ul>
);

const mapStateToProps = state => ({
    items: state.shoppingList
});

export const ShoppingList = connect(mapStateToProps)(renderShoppingList);