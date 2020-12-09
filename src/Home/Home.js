import React from "react";
import Counter from "../Counter/Counter";
import { connect } from "react-redux";
import { signOut } from "../store/action";


const Home = ({ signOutHandler, userEmail }) => {
    return (
        <div className="Home">
            <h2>Hello {userEmail}</h2>
            <Counter />
            <button onClick={() => signOutHandler()}>Signout</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userEmail: state.authReducer.user.attributes.email
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOutHandler: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);