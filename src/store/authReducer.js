const initialState = {
    isLoading: false,
    userIsAuthenticating: true,
    userIsAuthenticated: false,
    authError: null,
    user: null,
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case "IS_LOADING":
            return {
                ...state,
                authError: null,
                isLoading: true
            }

        case "SET_AUTHENTICATING":
            return {
                ...state,
                userIsAuthenticating: false
            }

        case "SET_USER_LOGGED":
            return {
                ...state,
                userIsAuthenticated: true,
                userIsAuthenticating: false,
                user: action.payload
            }

        case "LOGIN_FAILED":
            return {
                ...state,
                isLoading: false,
                authError: action.payload,
                userIsAuthenticating: false
            }


        case "LOGIN_SUCCESS":
            return {
                ...state,
                authError: null,
                userIsAuthenticating: false,
                userIsAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case "LOGOUT_SUCCESS":
            return {
                ...state,
                authError: null,
                userIsAuthenticating: false,
                userIsAuthenticated: false,
                isLoading: false,
                user: null
            }

        case "LOGOUT_FAILED":
            return {
                ...state,
                isLoading: false,
                authError: action.payload
            }
        default:
            return state;
    }

}

export default authReducer;