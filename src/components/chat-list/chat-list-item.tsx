import {NavLink} from "react-router-dom";
import {AppRoute, AVATAR_PLACEHOLDER} from "../../const";
import {UserType} from "../../types/user-type";

type ChatListItemPropsType = {
    user: UserType;
}

export default function ChatListItem({user}: ChatListItemPropsType) {
    const isActive = false;
    return (
        <NavLink to={`${AppRoute.Messenger}/${user.id}`}>
            <div className={`chat-list__item ${isActive && 'active'}`}>
                <img
                    className="post-author__avatar"
                    src={`${user.avatar ? user.avatar : AVATAR_PLACEHOLDER}`}
                    alt="profile-avatar"
                ></img>
                <span className="d__table">
                    <h6 className="title">{user.name}</h6>
                </span>
            </div>
        </NavLink>
    );
}