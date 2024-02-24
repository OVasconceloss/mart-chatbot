import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const createOpenAIMessage = async (userMessage, previousMessages = []) => {
    const messages = [
        {"role": "system", "content": `You are a helpful assistant`},
        {"role": "user", "content": userMessage},
        ...previousMessages
    ];

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
    });

    const allMessages = messages.concat(chatCompletion.choices[0].message);

    const responseWithHistory = {
        response: chatCompletion,
        messages: allMessages,
    };

    return responseWithHistory;
}

export default createOpenAIMessage;