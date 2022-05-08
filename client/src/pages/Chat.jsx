import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import '../styles/Chat.css';

// const socket = io("http://127.0.0.1:8080");

function Chat() {
    // const sendMessage = () => {
    //     socket.emit("test", "Hello World");
    // }

    // socket.on("test", (msg) => {
    //     console.log(msg);
    // })

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <div className="chat-container">
            <div className="chat-screen">
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
                        <input type="text" name="message" id="message" placeholder="Mensagem" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;