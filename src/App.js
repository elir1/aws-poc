import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { connect } from "react-redux";
import { Auth } from "@aws-amplify/auth";

import { setUserLogged } from "./store/action";

import Routes from "./Routes";


Amplify.configure(awsconfig);

const App = ({ setUserLoggedHandler }) => {

  const [isAuthenticating, setIsAuthenticating] = useState(true);


  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const user = await Auth.currentAuthenticatedUser();
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


const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedHandler: (user) => dispatch(setUserLogged(user))
  }
}

export default connect(null, mapDispatchToProps)(App);