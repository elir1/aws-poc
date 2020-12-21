import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";

import { BrowserRouter as Router } from 'react-router-dom';
import awsconfig from './aws-exports';
import rootReducer from "./store/rootReduer";

import App from './App';

import './index.css';

Amplify.configure(awsconfig);
const logger = createLogger();
const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


ReactDOM.render(

    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
