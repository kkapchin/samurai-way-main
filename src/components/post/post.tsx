export default function Post() {
    return (
        <div className="post__container grad-border">
            <div className="post___content grad-bordered">
                <div className="post__author">
                    <div className="d__flex align__c">
                        <img className="post-author__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_-_Xc8u7HQEVA66YYznJZwFctc06g3wFhKajU_BAVZb1BiFXBd8qChGfjK8WBkfALq0&usqp=CAU" alt="profile-avatar"></img>
                        <div className="post-author__info">
                            <h6 className="title">
                                <a href="/">
                                    <span>Ivo Namtar Wijers</span>
                                </a>
                            </h6>
                            <time className="post__time">1 min ago</time>
                        </div>
                    </div>
                    <span className="post-edit__btn">
                        <span>
                            <h6 className="title">...</h6>
                        </span>
                    </span>
                </div>
                <div className="post__text">
                    Lorem ipsum dolor sit amet. Non recusandae quidem et velit quidem qui iste animi et mollitia repudiandae aut dolorem voluptas est molestiae quisquam et voluptas aperiam. At sint reiciendis hic ipsam reiciendis et quia quod.
                    Lorem ipsum dolor sit amet. Non recusandae quidem et velit quidem qui iste animi et mollitia repudiandae aut dolorem voluptas est molestiae quisquam et voluptas aperiam. At sint reiciendis hic ipsam reiciendis et quia quod.
                    Lorem ipsum dolor sit amet. Non recusandae quidem et velit quidem qui iste animi et mollitia repudiandae aut dolorem voluptas est molestiae quisquam et voluptas aperiam. At sint reiciendis hic ipsam reiciendis et quia quod.
                    Lorem ipsum dolor sit amet. Non recusandae quidem et velit quidem qui iste animi et mollitia repudiandae aut dolorem voluptas est molestiae quisquam et voluptas aperiam. At sint reiciendis hic ipsam reiciendis et quia quod.
                </div>
                <div className="like__btn-active"></div>
            </div>
        </div>
    );
}