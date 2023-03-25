import {NavLink} from "react-router-dom";
import {AppRoute} from "../../const";
import {UserType} from "../../types/user-type";

type ChatListItemPropsType = {
    user: UserType;
}

export default function ChatListItem({user}: ChatListItemPropsType) {
    const isActive = false;
    return (
        <NavLink to={`${AppRoute.Messenger}/${user.id}`}>
            <div className={`chat-list__item ${isActive && 'active'}`}>
                <h6 className="title">{user.name}</h6>
            </div>
        </NavLink>
    );
}