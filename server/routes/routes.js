import FastifyCors from '@fastify/cors';
import createOpenAIMessage from "../services/openaiService.js";

let messageHistory = [];

export default async function fastifyRoutes(fastify) {
    fastify.register(FastifyCors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    });
    
    fastify.post('/mart', async (request, response) => {
        const { userMessage } = request.body;

        try {
            const { response: responseChat, messages } = await createOpenAIMessage(userMessage, messageHistory);
            messageHistory = messages;

            return { response: responseChat, messages };
        } catch (requestError) {
            console.log(`An error occurred while trying to receive the OpenAI API message: ${requestError}`);
            return requestError;
        }
    });
};