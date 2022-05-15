import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import '../styles/Chat.css';

import { apiUrl } from '../constants/apiCredentials';
import { checkIsAuthenticated } from '../utils/auth';

const socket = io("http://127.0.0.1:8080");

function Chat() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit("test", "Hello World");
    }

    useEffect(() => {
        checkIsAuthenticated(localStorage.getItem("token_jwt"))
            .then(authenticated => {
                if (!authenticated) {
                    navigate("/login");
                }
            });
    }, []);

    return (
        <div className="chat-container">
            <div className="chat-screen">
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
                </div>
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
                </div>
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
                </div>
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
                </div>
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
                </div>
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
                </div>
                <div className="message-block">
                    <span className="username">joao</span>
                    <span className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam, harum, qui esse error dolor cumque voluptatum dolorum culpa suscipit voluptatem minus alias doloremque dignissimos repudiandae exercitationem atque corrupti at?</span>
                    <span className="time">19:40</span>
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
                        <button>
                            <FontAwesomeIcon icon="fa-solid fa-face-smile" />
                        </button>
                    </div>
                    <div className="input-field message-field">
                        <input type="text" name="message" id="message" placeholder="Mensagem" autoComplete="off" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;