import ChatListItem from "./chat-list-item";
import {UserType} from "../../types/user-type";

type ChatListPropsType = {
    users: Array<UserType>
}

export default function ChatList({ users }: ChatListPropsType) {

    return (
        <div className="chat-list__wrap">
            <div className="chat-list__container">
                {users.map(user => <ChatListItem user={user} />)}
            </div>
        </div>
    );
}