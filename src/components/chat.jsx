import { useState } from "react";
import "./chat.css";

export default function Chat() {

    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);



    const sendText = (event) => {
    console.log(setText(event.target.value));
    <div>{setText(event.target.value)}</div>
    }

    const sendMessage = () => {
        if (text.trim() !== "") {
            setMessages([...messages, text]);
            setText("");
        }
        }



    return (
        <div className="main">
            <h2>Chat</h2>
            <div className="send">
            <input type="text" value={text} onChange={sendText}/>
            <button onClick={sendMessage}>Send</button>
            </div>
            <div className="messages">
                {messages.map((message, index) => (
                    <p key={index}>Користувач: {message}</p>
                ))}
            </div>
        </div>
    )
}