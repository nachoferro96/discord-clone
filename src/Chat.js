import React from 'react';
import "./Chat.css";
import Chatheader from "./Chatheader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message.js"
function Chat() {
    return (
        <div className="chat">
            <Chatheader />
            <div className="chat-messages">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat-inputs">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder={"message #TESTCHANNEL"}/>
                    <button type="submit" className="chat-input-button">Send Message</button>
                </form>
                <div className="chat-inputicons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
