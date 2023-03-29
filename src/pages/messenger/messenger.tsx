import ChatList from "../../components/chat-list/chat-list";
import Chat from "../../components/chat/chat";
import {UserType} from "../../types/user-type";

type MessengerPropsType = {
    users: Array<UserType>
}

export default function Messenger ({ users }: MessengerPropsType) {
    return (
        <div className="messenger__page">
            <div className="grad-border">
                <div className="messenger__wrap grad-bordered">
                    <ChatList users={users}/>
                    <Chat/>
                </div>
            </div>
        </div>
    );
}
