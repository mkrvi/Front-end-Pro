import React from "react";
import {messagesInfo} from "../../../data/messagesInfo";
import Message from "./Message";

function MessageList() {
    return(
        <div className="messages">
            {messagesInfo.map((message) => (
                <Message key={message.id} message={message}/>
            ))}
        </div>
    )
}
export default MessageList