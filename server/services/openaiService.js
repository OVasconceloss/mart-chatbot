import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const createOpenAIMessage = async (userMessage, messageHistory) => {
    const messages = [
        {"role": "system", "content": `You are a helpful assistant`},
        {"role": "user", "content": userMessage},
        ...messageHistory
    ];

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
    });

    const responseMessage = chatCompletion.choices[0].message;
    
    messageHistory.push(responseMessage);

    return {
        response: responseMessage,
        messages: messages
    };
}

export default createOpenAIMessage;