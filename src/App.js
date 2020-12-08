import React, { useEffect } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { connect } from "react-redux";
// import { Auth } from "@aws-amplify/auth";

import { isUserLoggedIn } from "./store/action";

import Routes from "./Routes";


Amplify.configure(awsconfig);

const App = ({ userIsAuthenticated, isUserLoggedInHandler }) => {

  useEffect(() => {
    isUserLoggedInHandler();
  }, [isUserLoggedInHandler]);


  return (
    <div className="App">
      <Routes />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    userIsAuthenticated: state.authReducer.userIsAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isUserLoggedInHandler: () => dispatch(isUserLoggedIn()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);