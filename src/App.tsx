import Header from './components/header/header';
import Main from './pages/main/main';
import Messenger from "./pages/messenger/messenger";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRoute} from "./const";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app__wrap">
                <Header />
                <Route path={AppRoute.Main} render={() => <Main />} />
                <Route path={AppRoute.Messenger} render={() => <Messenger />} />
            </div>
        </BrowserRouter>
    );
}
