import ChatListItem from "./chat-list-item";
import {UserType} from "../../types/user-type";

export default function ChatList() {

    const users: Array<UserType> = [
        {id: 1, name: 'Bloody d0b1k'},
        {id: 2, name: 'Madara Alexandrovich'},
        {id: 3, name: 'Dedist Drebedist'},
    ];

    return (
        <div className="chat-list__wrap">
            <div className="chat-list__container">
                {users.map(user => <ChatListItem user={user} />)}
            </div>
        </div>
    );
}