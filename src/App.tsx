import Header from './components/header/header';
import Main from './pages/main/main';
import Messenger from "./pages/messenger/messenger";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRoute} from "./const";
import {StateType} from "./types/state-type";

type AppPropsType = {
    state: StateType
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    updateNewMessageText: (text: string) => void
}

export default function App(props: AppPropsType) {
    const { state, addPost, updateNewPostText, updateNewMessageText } = props;
    return (
        <BrowserRouter>
            <div className="app__wrap">
                <Header />
                <Route
                    exact path={AppRoute.Main}
                    render={() => <Main
                        posts={state.main.posts}
                        friends={state.main.friends}
                        addPost={addPost}
                        newPostText={state.main.newPostText}
                        updateNewPostText={updateNewPostText}
                    />}
                />
                <Route
                    path={AppRoute.Messenger}
                    render={() => <Messenger
                        users={state.messenger.users}
                        newMessageText={state.messenger.newMessageText}
                        updateNewMessageText={updateNewMessageText}
                    />}
                />
            </div>
        </BrowserRouter>
    );
}
