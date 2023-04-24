import About from "../../components/about/about";
import Playlist from "../../components/playlist/playlist";
import Wall from "../../components/wall/wall";
import {PostType} from "../../types/post-type";
import Friends from "../../components/friends/friends";
import {UserType} from "../../types/user-type";
import AddPost from "../../components/add-post/add-post";

type MainPropsType = {
    posts: Array<PostType>
    friends: Array<UserType>
    addPost: (text: string) => void
}

export default function Main({ posts, friends, addPost }: MainPropsType) {
    return (
        <div className="main__page">

            <div className="side-block__wrap">
                <Playlist/>
                <Friends friends={friends}/>
            </div>

            <div className="middle-block__wrap">
                <AddPost addPost={addPost}/>
                <Wall posts={posts}/>
            </div>

            <div className="side-block__wrap">
                <About/>
            </div>
        </div>
    );
}
