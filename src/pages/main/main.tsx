import About from "../../components/about/about";
import Playlist from "../../components/playlist/playlist";
import Wall from "../../components/wall/wall";
import {PostType} from "../../types/post-type";

type MainPropsType = {
    posts: Array<PostType>
}

export default function Main({ posts }: MainPropsType) {
    return (
        <div className="main__page">

            <div className="side-block__wrap">
                <Playlist />
            </div>

            <Wall posts={posts}/>

            <div className="side-block__wrap">
                <About />
            </div>
        </div>
    );
}
