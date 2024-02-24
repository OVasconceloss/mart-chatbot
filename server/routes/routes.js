import createOpenAIMessage from "../services/openaiService.js";

export default async function fastifyRoutes(fastify) {

    //ROUTE TO SEND THE USER'S MESSAGE TO THE OPENAI API
    fastify.post('/mart', async (request, response) => {
        const { userMessage, previousMessages } = request.body;

        try {
            const { response: responseChat, messages } = await createOpenAIMessage(userMessage, previousMessages);
            
            return { response: responseChat.choices[0], messages };
        } catch (requestError) {
            console.log(`An error occurred while trying to receive the OpenAI API message: ${requestError}`);
            return requestError;
        }
    });
};