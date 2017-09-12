import React from 'react';
import PropTypes from 'prop-types';
import {combineReducers, createStore} from 'redux';
import {actionsReducer} from "../test_support/actionsReducer";
import {reducer as formReducer} from 'redux-form';
import {ShoppingListItemForm} from "./ShoppingListItemForm";
import {setValue, submit} from "../test_support";
import {mount} from "enzyme";

class Context extends React.Component {

    render() {
        return this.props.children;
    }

    getChildContext() {
        const { store, router } = this.props;
        return { store, router };
    }

    static childContextTypes = {
        store: PropTypes.any,
        router: PropTypes.any,
    }
}

describe('when new item is saved', () => {

    let store, history;

    beforeEach(() => {
        store = createStore(combineReducers({
            actions: actionsReducer,
            form: formReducer,
        }));

        history = { push: jest.fn() };

        const screen = mount(<Context store={store} router={{history}}><ShoppingListItemForm/></Context>);

        setValue(screen.find('[data-qa="new-item-name"]'), 'milk');
        submit(screen.find('[data-qa="save-new-item"]'));
    });

    it('dispatches item name when saved', () => {
        const actions = store.getState().actions;
        expect(actions).toContainEqual({type: 'CREATE_ITEM', payload: {name: 'milk'}});
    });

    it('navigates to the list page', () => {
        expect(history.push).toBeCalledWith('/');
    });

});