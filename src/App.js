import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { connect } from "react-redux";

import Routes from "./Routes";


Amplify.configure(awsconfig);

const App = ({ userIsAuthenticated }) => {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    userIsAuthenticated: state.authReducer.userIsAuthenticated
  };
};

export default connect(mapStateToProps)(App);