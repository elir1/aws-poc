const initialState = {
    isLoading: false,
    // userIsAuthenticating: true,
    userIsAuthenticated: false,
    authError: null,
    user: null
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case "IS_LOADING":
            return {
                ...state,
                authError:null,
                isLoading: true
            }

        case "LOGIN_ERROR":
            return {
                ...state,
                authError: action.payload
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authError: null,
                userIsAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        default:
            return state;
    }

}

export default authReducer;