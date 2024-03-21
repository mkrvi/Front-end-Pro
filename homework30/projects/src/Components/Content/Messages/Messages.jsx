import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessageList from "./MessageList";

function Messages() {
    return (
        <div className="messages-section">
            <MessagesHeader/>
            <MessageList/>
        </div>
    )
}
export default Messages