import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";
import ResetPassword from "./ResetPassword/ResetPassword";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
    return (
        <Switch>
            <ProtectedRoute exact path="/">
                <Home />
            </ProtectedRoute>

            <PublicRoute exact path="/login">
                <Login />
            </PublicRoute>

            <PublicRoute exact path="/login/reset">
                <ResetPassword />
            </PublicRoute>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;