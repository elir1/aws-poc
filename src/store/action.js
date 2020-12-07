import Auth from "@aws-amplify/auth";

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

    try{
        const authResponse = await Auth.signIn(email, password);
        dispatch({ type: "LOGIN_SUCCESS", payload: authResponse })
    }catch(err) {   
        dispatch({ type: "LOGIN_FAILED", payload: err })

    }

    // signIn = async () => {
    //     try {
    //       const { Email, Password } = this;
    //       await Auth.signIn(Email, Password);
    //       this.setUserIsAuthenticated(true);
    //     } catch (e) {
    //       if (e.code === "UserNotConfirmedException") {
    //         this.resendSignUp();
    //       } else {
    //         alert(e.message);
    //       }
    //     }

    //     this.setIsLoading(false);
    //   };

}
