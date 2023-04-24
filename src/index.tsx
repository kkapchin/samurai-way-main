import state, {addPost, subscribe, updateNewMessageText, updateNewPostText} from "./state/state";
import ReactDOM from "react-dom";
import App from "./App";

export const render = () => {
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

render();
subscribe(render);