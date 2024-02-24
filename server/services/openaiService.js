import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI();

const createOpenAIMessage = async (userMessage, previousMessages = []) => {
    const allMessages = [
        {"role": "system", "content": "You pretend to be named M.A.R.T (Machine Assistant for Resolve Tasks)"},
        {"role": "system", "content": `You're a very good helper and conversationalist. You are a very good helper and conversationalist, expert in any topic related to technology, physics, chemistry and mathematics.`},
        ... previousMessages,
        {"role": "user","content": userMessage,}
    ];

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: allMessages,
    });
    
    const chatResponse = completion.choices[0];

    return { allMessages, chatResponse };
}

export default createOpenAIMessage;