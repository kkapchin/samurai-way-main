import React, {LegacyRef} from "react";

export default function AddPost() {

    const newPostRef: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef();

    const addNewPost = () => {
        alert(newPostRef.current?.value);
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