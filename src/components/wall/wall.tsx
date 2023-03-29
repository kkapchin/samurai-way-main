import Post from "../post/post";
import {PostType} from "../../types/post-type";

type WallPropsType = {
    posts: Array<PostType>
}

export default function Wall({ posts }: WallPropsType) {
    return (
        <div className="wall__wrap">
            {posts.map(post => <Post post={post} />)}
        </div>
    );
}