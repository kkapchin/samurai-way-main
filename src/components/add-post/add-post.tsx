import React from "react";

type PropsType = {
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export default function AddPost({ addPost, newPostText, updateNewPostText }: PropsType) {

    const newPostRef = React.createRef<HTMLTextAreaElement>();

    const addNewPost = () => {
        if (!newPostRef.current) {
            return;
        }
        if (newPostRef.current.value === '') {
            return;
        }
        addPost(newPostRef.current.value);
        newPostRef.current.value = '';
    }

    const onChangeHandler = () => {
        if (!newPostRef.current) {
            return;
        }
        updateNewPostText(newPostRef.current.value)
    }

    return (
        <div className="wall__wrap">
            <div className="add-post__container grad-border">
                <div className="grad-bordered">
                    <textarea
                        ref={newPostRef}
                        onChange={onChangeHandler}
                        value={newPostText}
                    />
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>
    );
}