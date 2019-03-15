import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/layout';
import Home from './containers/home';
import dataReducer from './reducers/data_reducer';
import { reducer as formReducer } from 'redux-form';

const root = document.getElementById('root');

const initialState = {
    data: []
};
const reducers = combineReducers({
    data: dataReducer,
    form: formReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  root
);
