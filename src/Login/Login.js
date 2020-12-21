import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../store/action";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css"

const Login = ({ signInHandler, authError, isLoading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {

        event.preventDefault();
        signInHandler({ email, password });
        setEmail("");
        setPassword("");

    }


    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
                {isLoading ? <div>Is Loading....</div> : null}
                {authError ? <div>{authError.message}</div> : null}
            </Form>
            <Link to="/login/reset">Forgot password?</Link>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError,
        isLoading: state.authReducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signInHandler: (user) => dispatch(signIn(user)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);