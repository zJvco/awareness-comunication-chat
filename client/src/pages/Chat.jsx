import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import '../styles/Chat.css';

import EmojiList from "../components/EmojiList";

import { AuthContext } from '../context/Auth';

const socket = io("http://127.0.0.1:8080");

function Chat() {
    const [showEmojiList, setShowEmojiList] = useState(false);

    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = e.target.querySelector("#message").value;

        socket.emit("message", message);
    }

    socket.on("message", (message) => {
        console.log(message);
    });

    const handleEmojiClickList = () => {
        setShowEmojiList(!showEmojiList);
    }
    
    return (
        <div className="chat-container">
            <div className="chat-screen">
                <div className="message-block">
                    <span className="username">João</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa quasi quod quibusdam odit modi amet accusantium dolore, similique eligendi quaerat sapiente repellendus placeat quo suscipit nostrum totam fugit in!</span>
                    <span className="time">10:45</span>
                </div>
            </div>
            <div className="chat-tools">
                <form action="/asdasdasdasdas" onSubmit={handleSubmit}>
                    <div className="input-field file-field">
                        <label htmlFor="file">
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" />
                        </label>
                        <input type="file" name="file" id="file" />
                    </div>
                    <div className="input-field emoji-field">
                        <button type="button" onClick={handleEmojiClickList}>
                            <FontAwesomeIcon icon="fa-solid fa-face-smile" />
                        </button>
                    </div>
                    <div className="input-field message-field">
                        <input type="text" name="message" id="message" placeholder="Mensagem" autoComplete="off" />
                    </div>
                </form>
                {
                    showEmojiList ? (
                        <EmojiList />
                    ) : null
                }
            </div>
        </div>
    );
}

export default Chat;