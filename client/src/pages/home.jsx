/* eslint-disable react-hooks/exhaustive-deps */
import { sendMessage } from "../api/requestsAPI";
import { MessageUser } from "../components/messages/messageUser";
import { MessageChat } from "../components/messages/messageChat";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { HeaderSection } from "../components/section/header/headerSection";
import DefaultProfileImage from '../assets/images/default_profile_image.png';
import { HeaderAside } from "../components/aside/headerAside";

const Home = () => {
    const messageEndReference = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);
    const [messageHistory, setMessageHistory] = useState([]);

    const handleSendMessage = async (userMessage) => {
        setIsLoading(true);
        setUserMessage('');
        try {
            const responseAPI = await sendMessage(userMessage, setUserMessage, messageHistory, setMessageHistory);
            const updatedMessages = responseAPI.messages.map((message, index) => ({
                ...message,
                isLatest: index === responseAPI.messages.length - 1
            }));
            setAllMessages(updatedMessages);
        } catch (error) {
            console.log(`Error sending request to API: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage(userMessage);
        }
    }
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
          }, 2000);

        return () => clearTimeout(loadingTimer);
    }, []);

    useLayoutEffect(() => {
        scrollToBottom();
    }, [allMessages, isLoading]);

    const scrollToBottom = () => {
        if (!isLoading && messageEndReference.current) {
            messageEndReference.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <main className="flex justify-between h-screen bg-zinc-800">
            <aside className="flex flex-col w-64 h-full p-5 bg-zinc-900 rounded-r-xl">
                <HeaderAside />
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
                            src={DefaultProfileImage}
                            alt="Profile Picture"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <p className="text-zinc-100">User Name Example</p>
                    </div>
                </div>
            </aside>
            <section className="flex flex-col w-full h-screen p-5 bg-zinc-800">
                <HeaderSection />
                <div id="messages" className="flex-grow overflow-y-auto m-10">
                    {allMessages?.map((message, index) => (
                        <div key={index}>
                            {message.role === 'user' ? (
                                <MessageUser userMessage={message.content} />
                            ) : (
                                <MessageChat chatMessage={message.content} isLatest={message.isLatest}/>
                            )}
                        </div>
                    ))}
                    {isLoading &&
                        <div id="message-mart" className="flex items-start p-10 gap-3">
                            <img 
                                src="https://github.com/rocketseat.png" 
                                alt="Profile Picture"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg text-zinc-100">M.A.R.T</h4>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="h-3 w-3 bg-zinc-300 mr-3 rounded-full animate-pulse"></div>
                                    <div className="h-3 w-3 bg-zinc-300 mr-3 rounded-full animate-pulse"></div>
                                    <div className="h-3 w-3 bg-zinc-300 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    }
                <div ref={messageEndReference}></div>
                </div>
                <div id="user-input" className="flex items-center justify-center w-full">
                    <input 
                        type="text"
                        value={userMessage}
                        placeholder="Message Mart Chatbot"
                        onChange={(event) => setUserMessage(event.target.value)}
                        onKeyDown={handleKeyPress}
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