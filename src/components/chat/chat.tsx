import React from "react";

type PropsType = {
    newMessageText: string
    updateNewMessageText: (text: string) => void
}

export default function Chat ({ newMessageText, updateNewMessageText }: PropsType) {

    const newMessageRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        alert(newMessageRef.current?.value);
    }

    const onChangeHandler = () => {
        if(!newMessageRef.current) {
            return;
        }
        updateNewMessageText(newMessageRef.current.value);
    }

    return (
        <div className="chat__wrap">
            <div className="chat__container">
                <h6 className="title">Select a chat to start messaging</h6>
                <div className="new-message__container">
                    <textarea
                        ref={newMessageRef}
                        onChange={onChangeHandler}
                        value={newMessageText}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}