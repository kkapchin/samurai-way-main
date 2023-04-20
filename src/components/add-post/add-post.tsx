import React from "react";

type PropsType = {
    addPost: (text: string) => void
}

export default function AddPost({ addPost }: PropsType) {

    const newPostRef = React.createRef<HTMLTextAreaElement>();

    const addNewPost = () => {
        if (!newPostRef.current) {
            return;
        }
        if (newPostRef.current.value === '') {
            return;
        }
        addPost(newPostRef.current.value);
    }

    return (
        <div className="wall__wrap">
            <div className="add-post__container grad-border">
                <div className="grad-bordered">
                    <textarea ref={newPostRef}></textarea>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>
    );
}