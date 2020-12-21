import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { connect } from "react-redux";
import { signOut } from "../store/action";

import { API } from "aws-amplify";

const Home = ({ signOutHandler, userEmail }) => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await API.get("peopleapi", "/people");
        console.log(res);
        // setUsers(res.data.Items);
    }

    console.log(users);


    /* Next, create a function for calling the REST API to create a new contact */
    async function createContact() {
        const data = {
            body: {
                name,
                job
            }
        };
        const apiData = await API.post('peopleapi', '/people', data);
        console.log({ apiData });
    }

    /* Create some type of local state to hold the form input. This is pseudocode and will differ based on your JavaScript framework. */




    return (
        <div className="Home">
            <h2>Hello {userEmail}</h2>
            <Counter />
          
            <input placeholder="name" onChange={e => setName(e.target.value)} />
            <input placeholder="job" onChange={e => setJob(e.target.value)} />
            <button onClick={createContact}>Create New Contact</button>
            <div>
                <button onClick={() => signOutHandler()}>Signout</button>
            </div>

            <h2>USERS</h2>
            {users.length ? users.map(user => <p key={user.id}>{user.name} , {user.job}</p>) : <p>Loading...</p>}
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