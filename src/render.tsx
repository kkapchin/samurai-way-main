import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {StateType} from "./types/state-type";
import {addPost} from "./state/state";

export const render = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}