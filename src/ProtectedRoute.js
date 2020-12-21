import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ userIsAuthenticated, children, ...rest }) => {
    console.log('Protected route - user', userIsAuthenticated);
    const { pathname, search } = useLocation();
    return (
        <Route {...rest}>
            {userIsAuthenticated ? (
                children
            ) : (
                    <Redirect to={`/login?redirect=${pathname}${search}`} />
                )}
        </Route>
    );
};

const mapStateToProps = (state) => {
    return {
        userIsAuthenticated: state.authReducer.userIsAuthenticated
    }
}

export default connect(mapStateToProps)(ProtectedRoute);
