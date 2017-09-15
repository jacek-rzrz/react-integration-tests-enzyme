import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createItem} from "./actions";

const renderShoppingListItemForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Field component="input" type="text" name="name" data-qa="new-item-name" autoFocus={true}/>
        <button type="submit" data-qa="save-new-item">Save</button>
    </form>
);

const handleSubmit = (values, dispatch) => {
    dispatch(createItem(values));
};

export const ShoppingListItemForm = reduxForm({form: 'new-item', onSubmit: handleSubmit})(renderShoppingListItemForm);