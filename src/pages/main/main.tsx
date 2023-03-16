import About from "../../components/about/about";
import Playlist from "../../components/playlist/playlist";
import Wall from "../../components/wall/wall";

export default function Main() {
    return (
        <div className="main__page">
            <Playlist />
            <Wall />
            <About />
        </div>
    );
}
