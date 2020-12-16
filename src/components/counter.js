import React from 'react'
import {connect} from "react-redux";
import {dec, inc, rnd} from "../actions";

const CounterComponent = ({counter, inc , dec, rnd}) => {

    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>DEC</button>
            <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>INC</button>
            <button id="rnd" className="btn btn-primary btn-lg" onClick={rnd}>RND</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
        counter: state
});

const mapDispatchToProps = (dispatch) => ({
    inc() {
        dispatch(inc());
        },
    dec() {
        dispatch(dec());
        },
    rnd() {
        dispatch(rnd());
    }
});

export const Counter = connect(mapStateToProps ,mapDispatchToProps)(CounterComponent);
