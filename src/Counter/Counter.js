import React from 'react';
import { connect } from "react-redux";
import { increment, decrement } from "../store/action";

const Counter = (props) => {

    return (
        <div className="counter">
            <button onClick={() => props.decrementHandler()}> - </button>
            <span>{props.counter}</span>
            <button onClick={() => props.incrementHandler()}>+</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementHandler: () => dispatch(increment()),
        decrementHandler: () => dispatch(decrement())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);