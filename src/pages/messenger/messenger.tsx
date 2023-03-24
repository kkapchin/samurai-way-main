import ChatList from "../../components/chat-list/chat-list";
import Chat from "../../components/chat/chat";

export default function Messenger () {
    return (
        <div className="messenger__page">
            <div className="grad-border">
                <div className="messenger__wrap grad-bordered">
                    <ChatList/>
                    <Chat/>
                </div>
            </div>
        </div>
    );
}
