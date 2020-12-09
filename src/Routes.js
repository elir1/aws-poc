import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";

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

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;