import React from 'react';
import { connect } from "react-redux";
import { increment, decrement, changeLang } from "../store/action";

const Counter = (props) => {

    return (
        <div>
            <div className="counter">
                <button onClick={() => props.decrementHandler()}> - </button>
                <span>{props.counter}</span>
                <button onClick={() => props.incrementHandler()}>+</button>
            </div>

        <button onClick={() => props.changeLangHandler('en')}>EN</button>
        <button onClick={() => props.changeLangHandler('he')}>עברית</button>
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
        decrementHandler: () => dispatch(decrement()),
        changeLangHandler: (lang) => dispatch(changeLang(lang))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);