// import Auth from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
export const increment = (data) => {
    return {
        type: "INCREMENT"
    };
};

export const decrement = (data) => {
    return {
        type: "DECREMENT"
    };
};


export const signIn = (credentials) => async (dispatch) => {
    dispatch({ type: "IS_LOADING" });
    const { email, password } = credentials;

    try {
        const authResponse = await Auth.signIn(email, password);
        dispatch({ type: "LOGIN_SUCCESS", payload: authResponse });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILED", payload: err });
    }
}


export const isUserAuthenticated = () => async (dispatch) => {

    dispatch({type: "IS_LOADING"});
    try {
        const user = await Auth.currentAuthenticatedUser();
        dispatch({ type: "SET_USER_LOGGED", payload: user });
    }
    catch(err) {
        dispatch({ type: "LOGIN_FAILED", payload: err });
    }
}

export const setUserLogged = (user) => {
    return {
        type: "SET_USER_LOGGED",
        payload: user
    }
}

export const setAuthenticating = () => {
    return {
        type: "SET_AUTHENTICATING"
    }
}


export const signOut = () => async (dispatch) => {
    dispatch({ type: "IS_LOADING" });
    try {
        await Auth.signOut();
        dispatch({ type: "LOGOUT_SUCCESS" });
    }
    catch (err) {
        dispatch({ type: "LOGOUT_FAILED", payload: err });
    }
}

export const changeLang = (language) => {
    return {
        type: "CHANGE_LANG",
        payload: language
    }
}

