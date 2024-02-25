import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const createOpenAIMessage = async (userMessage, messageHistory) => {
    const updatedHistory = messageHistory.concat([
        {"role": "user", "content": userMessage},
        {"role": "assistant", "content": ""}
    ]);

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: updatedHistory,
    });

    const responseMessage = chatCompletion.choices[0].message.content;

    updatedHistory[updatedHistory.length - 1].content = responseMessage;

    return {
        response: responseMessage,
        messages: updatedHistory
    };
}

export default createOpenAIMessage;