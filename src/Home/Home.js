import React from "react";
import Counter from "../Counter/Counter";

const Home = () => {
    return (
        <div className="Home">
            <h2>Hello [name]</h2>
            <Counter />
            <button>Signout</button>
        </div>
    )
}

export default Home;