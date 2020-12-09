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
                authError: null,
                isLoading: true
            }

        case "SET_USER_LOGGED":
            return {
                ...state,
                userIsAuthenticated: true,
                user: action.payload
            }

        case "LOGIN_FAILED":
            return {
                ...state,
                isLoading: false,
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

        case "LOGOUT_SUCCESS":
            return {
                ...state,
                authError: null,
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