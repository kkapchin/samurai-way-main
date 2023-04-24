import React from "react";

export default function Chat () {

    const newMessageRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        alert(newMessageRef.current?.value);
    }

    return (
        <div className="chat__wrap">
            <div className="chat__container">
                <h6 className="title">Select a chat to start messaging</h6>
                <div className="new-message__container">
                    <textarea ref={newMessageRef}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}