import {PostType} from "../../types/post-type";

type PostPropsType = {
    post: PostType
}

export default function Post({ post } : PostPropsType) {
    return (
        <div className="post__container grad-border">
            <div className="post__content grad-bordered">
                <div className="post__author">
                    <div className="d__flex align__c">
                        <img className="post-author__avatar" src={post.user.avatar} alt="profile-avatar"></img>
                        <div className="post-author__info">
                            <h6 className="title">
                                <a href="/">
                                    <span>{post.user.name}</span>
                                </a>
                            </h6>
                            <time className="post__time">{post.time}</time>
                        </div>
                    </div>
                    <span className="post-edit__btn">
                        <span>
                            <h6 className="title">...</h6>
                        </span>
                    </span>
                </div>
                <div className="post__text">
                    {post.text}
                </div>
                <div className="like__btn-active"></div>
            </div>
        </div>
    );
}