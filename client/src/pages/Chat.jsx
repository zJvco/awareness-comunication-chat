import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import EmojiList from "../components/EmojiList";
import File from "../components/File";

import { AuthContext } from '../context/Auth';

import '../styles/Chat.css';

const socket = io("http://127.0.0.1:8080");

function Chat() {
    const navigate = useNavigate();

    const [showEmojiList, setShowEmojiList] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
 
    const { user, authenticated } = useContext(AuthContext);

    useEffect(() => {
        if (!authenticated) navigate("/login");

        const chatScreenEl = document.querySelector(".chat-screen");
        chatScreenEl.scrollTo(0, chatScreenEl.scrollHeight);

        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
        
        socket.on("file-upload", (message) => {
            const blob = new Blob([message.metadata.buffer], { type: message.metadata.type });
            
            const FReader = new FileReader();
    
            FReader.onloadend = () => {
                setMessages([...messages, {
                    "uid": message.uid,
                    "msg_type": "file",
                    "filename": message.metadata.filename,
                    "type": message.metadata.type,
                    "data": FReader.result
                }]);
            }
            FReader.readAsDataURL(blob);
        });
    }, [messages]);

    const uploadFile = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const FReader = new FileReader();

        FReader.onload = (fEvent) => {
            let buffer = fEvent.target.result;

            socket.emit("file-upload", {
                "uid": user.id,
                "metadata": {
                    "filename": file.name,
                    "type": file.type,
                    "buffer": buffer
                }
            });
        }
        FReader.readAsArrayBuffer(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!message) {
            return;
        }

        const date = new Date();
        const fdate = date.getHours() + ":" + date.getMinutes();

        socket.emit("message", {
            "uid": user.id,
            "msg_type": "text",
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
                    {if (msg.msg_type === "text") {
                        return (
                            <div className="message-block" key={index}>
                                <div className="message-content" style={{
                                    float: msg.uid == user.id ? "right" : "left"
                                }}>
                                    <span className="username-display">{msg.username}</span>
                                    <span className="message-display">{msg.message}</span>
                                    <span className="time-display">{msg.time}</span>
                                </div>
                            </div>
                        )
                    } else if (msg.msg_type === "file") {
                        return (
                            <div className="message-block" key={index}>
                                <div className="file-content" style={{
                                    float: msg.uid == user.id ? "right" : "left"
                                }}>
                                    <a href={msg.data} download={msg.filename}>
                                        <File username={user.username} filename={msg.filename} type={msg.type} data={msg.data} />
                                    </a>
                                </div>
                            </div>
                        )
                    }}
                })}
            </div>
            <div className="chat-tools">
                <form onSubmit={handleSubmit}>
                    <div className="input-field file-field">
                        <label htmlFor="file">
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" />
                        </label>
                        <input type="file" name="file" id="file" onChange={uploadFile} />
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