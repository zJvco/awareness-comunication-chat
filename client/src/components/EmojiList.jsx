import React from "react";

import { availableEmojisCode } from '../constants/availableEmojis';

import '../styles/EmojiList.css';

function EmojiList({ message, setMessage }) {
    const handleEmojiClick = (e) => {
        setMessage(message + e.target.innerText);
    }

    return (
        <div className="emoji-list-container">
            <h4>Emojis</h4>
           	<ul>
                {
                    availableEmojisCode.map((emoji, index) => {
                        return (
                            <li key={index}>
                                <button onClick={handleEmojiClick}>
                                    {emoji}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default EmojiList;