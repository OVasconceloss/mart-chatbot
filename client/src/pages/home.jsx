import { useState } from "react";
import { sendMessage } from "../api/requestsAPI";
import { MessageUser } from "../components/messages/messageUser";
import { MessageChat } from "../components/messages/messageChat";

const Home = () => {
    const [userMessage, setUserMessage] = useState();
    const [allMessages, setAllMessages] = useState([]);
    const [messageHistory, setMessageHistory] = useState([]);

    const handleSendMessage = async (userMessage) => {
        setUserMessage('');
        try {
            const responseAPI = await sendMessage(userMessage, setUserMessage, messageHistory, setMessageHistory);
            setAllMessages(responseAPI.messages);
        } catch (error) {
            console.log(`Error sending request to API: ${error}`);
        }
    };

    return (
        <>
        <main className="flex justify-between h-screen bg-zinc-800">
            <aside className="flex flex-col w-64 h-full p-5 bg-zinc-900 rounded-r-xl">
                <div id="header-aside">
                    <h1 className="pb-5 mb-5 text-2xl text-zinc-100 text-center">M.A.R.T</h1>
                </div>
                <div id="content-aside" className="self-center w-60">
                    <div className="flex items-end justify-between p-2 mb-5 bg-zinc-800 rounded-md">
                        <h2 className="text-zinc-100">Chat Name Example</h2>
                        <button className="text-md text-zinc-100">
                            <i className="fa-solid fa-gear"></i>
                        </button>
                    </div>
                </div>
                <div id="footer-aside" className="mt-auto self-center">
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://github.com/OVasconceloss.png" 
                            alt="Profile Picture"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <p className="text-zinc-100">User Name Example</p>
                    </div>
                </div>
            </aside>
            <section className="flex flex-col w-full h-screen p-5 bg-zinc-800">
                <div id="header-section" className="flex items-center justify-between w-full">
                    <h1 className="text-2xl text-zinc-100">GPT 3.5 Turbo</h1>
                    <div>
                        <a href="https://github.com/OVasconceloss/mart-chatbot" target="_blank">
                            <button 
                                className="w-20 border border-zinc-100 rounded-md text-xl text-zinc-100
                                transition ease-linear hover:bg-zinc-100 hover:text-zinc-800">
                                    <i className="fa-brands fa-github"></i>
                            </button>
                        </a>
                    </div>
                </div>
                <div id="messages" className="flex-grow overflow-y-auto m-10">
                    {allMessages?.map((message, index) => (
                        <div key={index}>
                            {message.role === 'user' ? (
                                <MessageUser userMessage={message.content} />
                            ) : (
                                <MessageChat chatMessage={message.content} />
                            )}
                        </div>
                    ))}
                </div>
                <div id="user-input" className="flex items-center justify-center w-full">
                    <input 
                        type="text"
                        value={userMessage}
                        placeholder="Message Mart Chatbot"
                        onChange={(event) => setUserMessage(event.target.value)}
                        className="w-[46rem] my-5 p-2 bg-zinc-700 outline-none border border-zinc-700 rounded-md text-zinc-100
                        transition ease-linear focus:border-zinc-100"
                    />
                    <button
                        onClick={() => handleSendMessage(userMessage)}
                        className="w-10 mx-2 p-2 bg-zinc-700 rounded-md text-zinc-100
                        transition ease-linear hover:bg-zinc-100 hover:text-zinc-700"
                    >
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </section>
        </main>
        </>
    );
};

export default Home;