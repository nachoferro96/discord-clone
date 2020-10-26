import React from 'react'
import "./Message.css";
import { Avatar } from "@material-ui/core"



function Message() {
    return (
        <div className="message">
             <Avatar src="https://i.insider.com/59839d5d76084a6b008b5447?width=971&format=jpeg"/>
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
