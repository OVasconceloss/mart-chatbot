import axios from 'axios';

export const sendMessage = async (userMessage, setUserMessage, messageHistory, setMessageHistory) => {
    try {
        const response = await axios.post('http://localhost:8080/mart', { userMessage, messageHistory });
        const { response: responseChat, messages } = response.data;

        setUserMessage('');
        setMessageHistory(response.data);

        return {responseChat: responseChat.content, messages};
    } catch (sendMessageError) {
        console.log(`${sendMessageError}`);
    }
}