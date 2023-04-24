import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {StateType} from "./types/state-type";
import {addPost, updateNewPostText} from "./state/state";

export const render = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}