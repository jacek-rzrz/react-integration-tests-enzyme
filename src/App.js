import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import './styles/App.css';
import {ShoppingListItemForm} from "./shopping_list/ShoppingListItemForm";
import {ShoppingList, shoppingListMiddleware, shoppingListReducer} from "./shopping_list";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';
import createHistory from 'history/createBrowserHistory';
import {Calendar} from './calendar';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

export class App extends Component {

    store = createStore(combineReducers({
            shoppingList: shoppingListReducer,
            form: formReducer,
            router: routerReducer
        }),
        composeEnhancers(applyMiddleware(shoppingListMiddleware, routerMiddleware(history)))
    );

    render() {
        return (
            <Provider store={this.store}>
                <ConnectedRouter history={history}>
                    <div className="app">
                        <h1>Shopping list</h1>
                        <ShoppingList/>
                        <Route path="/new-item" component={ShoppingListItemForm}/>
                        <Route exact path="/" render={() =>
                            <Link to="/new-item" data-qa="add-new-item">New item</Link>
                        }/>
                        <Calendar/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}