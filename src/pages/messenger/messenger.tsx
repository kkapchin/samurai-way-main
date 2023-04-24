import ChatList from "../../components/chat-list/chat-list";
import Chat from "../../components/chat/chat";
import {UserType} from "../../types/user-type";

type MessengerPropsType = {
    users: Array<UserType>
    newMessageText: string
    updateNewMessageText: (text: string) => void
}

export default function Messenger ({ users, newMessageText, updateNewMessageText }: MessengerPropsType) {
    return (
        <div className="messenger__page">
            <div className="grad-border">
                <div className="messenger__wrap grad-bordered">
                    <ChatList users={users}/>
                    <Chat
                        newMessageText={newMessageText}
                        updateNewMessageText={updateNewMessageText}
                    />
                </div>
            </div>
        </div>
    );
}
