import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {StateType} from "./types/state-type";
import {addPost, updateNewMessageText, updateNewPostText} from "./state/state";

export const render = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById('root')
    );
}