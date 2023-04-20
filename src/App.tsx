import Header from './components/header/header';
import Main from './pages/main/main';
import Messenger from "./pages/messenger/messenger";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRoute} from "./const";
import {StateType} from "./types/state-type";

type AppPropsType = {
    state: StateType
    addPost: (text: string) => void
}

export default function App({ state, addPost }: AppPropsType) {
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
                    />}
                />
                <Route
                    path={AppRoute.Messenger}
                    render={() => <Messenger users={state.messenger.users} />}
                />
            </div>
        </BrowserRouter>
    );
}
