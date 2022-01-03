import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./GlobalStyles"
import App from './App';

//REDUX SETUP
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </Router>
  </Provider >
  , document.getElementById('root')
);
