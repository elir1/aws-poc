import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";

import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
    return (
        <Switch>
            <ProtectedRoute exact path="/">
                <Home />
            </ProtectedRoute>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;