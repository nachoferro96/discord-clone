import React from 'react'
import "./Message.css";
import { Avatar } from "@material-ui/core"



function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message-info">
                <h4>Ignacio
                    <span className="message-timestamp">this is a timestamp</span>
                </h4>

                <p>This is the message </p>
            </div>
        </div>
    )
}

export default Message 
