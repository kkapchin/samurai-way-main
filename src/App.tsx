import Header from './components/header/header';
import Main from './pages/main/main';
import Messenger from "./pages/messenger/messenger";

export default function App() {
    return (
        <div className="app__wrap">
            <Header/>
            {/*<Main />*/}
            <Messenger/>
        </div>
    );
}
