import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";

export const render = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);