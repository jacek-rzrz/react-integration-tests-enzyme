import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './styles/App.css';
import {ShoppingListItemForm} from "./shopping_list/ShoppingListItemForm";
import {ShoppingList, shoppingListReducer, shoppingListMiddleware} from "./shopping_list";
import {Provider} from "react-redux";
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {reducer as formReducer} from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        shoppingList: shoppingListReducer,
        form: formReducer
    }),
    composeEnhancers(applyMiddleware(shoppingListMiddleware))
);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="app">
                        <h1>Shopping list</h1>
                        <ShoppingList/>
                        <Route path="/new-item" component={ShoppingListItemForm}/>
                        <Route exact path="/" render={() =>
                            <Link to="/new-item" data-qa="add-new-item">New item</Link>
                        }/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}