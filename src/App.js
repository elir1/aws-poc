import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { connect } from "react-redux";
import { Auth } from "@aws-amplify/auth";

// import AutoDirectionProvider from 'react-with-direction/dist/AutoDirectionProvider';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';




import { setUserLogged, setAuthenticating, isUserAuthenticated } from "./store/action";

import Routes from "./Routes";


Amplify.configure(awsconfig);

const App = ({ userIsAuthenticating, lang, isUserAuthenticatedHandler }) => {
  // const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    console.log(userIsAuthenticating);
    // onLoad();
    isUserAuthenticatedHandler();
  }, []);

  // async function onLoad() {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     setUserLoggedHandler(user);
  //   }
  //   catch(e) {
  //     console.log(e);
  //   }

  //   // setIsAuthenticating(false);
  //   setAuthenticatingHandler()
  // }




  return (
    // !isAuthenticating && <div className="App">
    //   <Routes  />
    // </div>

    userIsAuthenticating 
    ? <div>loading</div>
    : <DirectionProvider direction={lang === "he" ? DIRECTIONS.RTL : DIRECTIONS.LTR}><div className="App"><Routes /> </div></DirectionProvider>
  )
}


const mapStateToProps = (state) => {
  return {
    userIsAuthenticating: state.authReducer.userIsAuthenticating,
    lang: state.counterReducer.lang
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedHandler: (user) => dispatch(setUserLogged(user)),
    setAuthenticatingHandler: () => dispatch(setAuthenticating()),
    isUserAuthenticatedHandler: () => dispatch(isUserAuthenticated())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);