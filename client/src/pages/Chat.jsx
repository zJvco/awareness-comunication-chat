import { useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import '../styles/Chat.css';

import EmojiList from "../components/EmojiList";

import { AuthContext } from '../context/Auth';

const socket = io("http://127.0.0.1:8080");

function Chat() {
    const [showEmojiList, setShowEmojiList] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // useEffect(() => {
    //     socket.on("connect", () => {
    //         socket.emit("join", `Usuário ${user.username} conectado!`);
    //     });
    // }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!message) {
            return;
        }

        const date = new Date();
        const fdate = date.getHours() + ":" + date.getMinutes();

        socket.emit("message", {
            "id": user.id,
            "username": user.username,
            "message": message,
            "time": fdate
        });

        setMessage("");
    }

    const handleEmojiClickList = () => {
        setShowEmojiList(!showEmojiList);
    }

    return (
        <div className="chat-container">
            <div className="chat-screen">
                {messages.map((msg, index) => {
                    return (
                        <div className="message-block" key={index}>
                            <div className="message-content" style={{ float: msg.id == user.id ? "right" : "left" }}>
                                <span className="username-display">{msg.username}</span>
                                <span className="message-display">{msg.message}</span>
                                <span className="time-display">{msg.time}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="chat-tools">
                <form onSubmit={handleSubmit}>
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
                        <input type="text" name="message" id="message" placeholder="Mensagem" autoComplete="off" value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <div className="input-field submit-field">
                        <button type="submit">
                            <FontAwesomeIcon icon="fas fa-paper-plane" />
                        </button>
                    </div>
                </form>
                {
                    showEmojiList ? <EmojiList message={message} setMessage={setMessage} /> : null
                }
            </div>
        </div>
    );
}

export default Chat;