import Header from './components/header/header';
import Main from './pages/main/main';
import Messenger from "./pages/messenger/messenger";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRoute} from "./const";
import {posts} from "./mocks/posts";
import {users} from "./mocks/users";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app__wrap">
                <Header />
                <Route path={AppRoute.Main} render={() => <Main posts={posts}/>} />
                <Route path={AppRoute.Messenger} render={() => <Messenger users={users} />} />
            </div>
        </BrowserRouter>
    );
}
