import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger'
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/app';
import messagesReducer from './reducers/messages_reducer';

const chatContainer = document.getElementById('chat_app');

const initialState = {
  messages: [],
  channels: JSON.parse(chatContainer.dataset.channels).map(c => c.name)
};

const reducers = combineReducers({
  channels: (state = null, action) => state,
  messages: messagesReducer,
});

const middlewares = applyMiddleware(logger, ReduxPromise);

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" exact component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
