/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const MessageChat = ({ chatMessage, isLatest }) => {
    const [displayMessage, setDisplayMessage] = useState('');

    useEffect(() => {
        if (isLatest) {
            let currentCharIndex = 0;
            const interval = setInterval(() => {
                if (currentCharIndex <= chatMessage.length) {
                    setDisplayMessage(chatMessage.slice(0, currentCharIndex));
                    currentCharIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 50);

            return () => clearInterval(interval);
        } else {
            setDisplayMessage(chatMessage);
        }
    }, [chatMessage, isLatest]);

    return (
        <div id="message-mart" className="flex items-start p-10 gap-3">
            <img 
                src="https://github.com/rocketseat.png" 
                alt="Profile Picture"
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <h4 className="text-lg text-zinc-100">M.A.R.T</h4>
                <p className="py-2 text-zinc-100 text-justify">{displayMessage}</p>
            </div>
        </div>
    )
}