import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../store/action";

const Login = ({signInHandler}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    function handleSubmit(event) {
        
        event.preventDefault();
        signInHandler({ email, password });
    }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name="email" onChange={e => setEmail(e.target.value)} type="email" />

                <label>Password</label>
                <input name="password" onChange={e => setPassword(e.target.value)} type="password" />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInHandler: (user) => dispatch(signIn(user)),
    }
}


export default connect(null, mapDispatchToProps)(Login);