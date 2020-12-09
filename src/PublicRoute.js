import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ userIsAuthenticated, children, ...rest }) => {
    console.log('public route - user', userIsAuthenticated);

    return (
        <Route {...rest}>
            {!userIsAuthenticated ? children : <Redirect to="/" />}
        </Route>
    );
};

const mapStateToProps = (state) => {
    return {
        userIsAuthenticated: state.authReducer.userIsAuthenticated
    }
}

export default connect(mapStateToProps)(PublicRoute);
