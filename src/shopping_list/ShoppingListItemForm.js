import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from "redux-form";
import {createItem} from "./actions";

const renderShoppingListItemForm = ({handleSubmit}, {router}) => (
    <form onSubmit={e => { handleSubmit(e); router.history.push('/'); }}>
        <Field component="input" type="text" name="name" data-qa="new-item-name" />
        <button type="submit" data-qa="save-new-item">Save</button>
    </form>
);

renderShoppingListItemForm.contextTypes = {
    router: PropTypes.object
};

const handleSubmit = (values, dispatch) => {
    dispatch(createItem(values));
};

export const ShoppingListItemForm = reduxForm({ form: 'new-item', onSubmit: handleSubmit })(renderShoppingListItemForm);