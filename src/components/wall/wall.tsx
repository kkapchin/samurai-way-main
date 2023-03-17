import Post from "../post/post";

export default function Wall() {
    return (
        <div className="wall__wrap">
            <Post />
            <Post />
        </div>
    );
}