import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { connect } from "react-redux";
import { Auth } from "@aws-amplify/auth";

import { isUserLoggedIn, setUserLogged } from "./store/action";

import Routes from "./Routes";


Amplify.configure(awsconfig);

const App = ({ isUserLoggedInHandler, setUserLoggedHandler }) => {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  // useEffect(() => {
  //   isUserLoggedInHandler();
  // }, [isUserLoggedInHandler]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      userHasAuthenticated(true);
      setUserLoggedHandler(user);
    }
    catch(e) {
      console.log(e);
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && <div className="App">
      <Routes  />
    </div>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     userIsAuthenticated: state.authReducer.userIsAuthenticated
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    isUserLoggedInHandler: () => dispatch(isUserLoggedIn()),
    setUserLoggedHandler: (user) => dispatch(setUserLogged(user))
  }
}

export default connect(null, mapDispatchToProps)(App);