import About from "../../components/about/about";
import Playlist from "../../components/playlist/playlist";
import Wall from "../../components/wall/wall";
import {PostType} from "../../types/post-type";
import Friends from "../../components/friends/friends";
import {UserType} from "../../types/user-type";

type MainPropsType = {
    posts: Array<PostType>
    friends: Array<UserType>
}

export default function Main({ posts, friends }: MainPropsType) {
    return (
        <div className="main__page">

            <div className="side-block__wrap">
                <Playlist />
                <Friends friends={friends}/>
            </div>

            <Wall posts={posts}/>

            <div className="side-block__wrap">
                <About />
            </div>
        </div>
    );
}
