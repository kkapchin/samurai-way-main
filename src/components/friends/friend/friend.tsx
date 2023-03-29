import {AppRoute, AVATAR_PLACEHOLDER} from "../../../const";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../types/user-type";

//1. fix NavLink route to user page
type FriendPropsType = {
    user: UserType
}
export default function Friend ({ user }: FriendPropsType) {
    return (
        <NavLink to={`${AppRoute.Main}/${user.id}`}>
            <div className="chat-list__item">
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