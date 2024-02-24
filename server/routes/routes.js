import createOpenAIMessage from "../services/openaiService.js";

export default async function fastifyRoutes (fastify) {

    //ROUTE TO SEND THE USER'S MESSAGE TO THE OPENAI API
    fastify.get('/:userMessage', async (request, response) => {
        let previousMessages = [];
        const { userMessage } = request.params;

        try {
            const chatMessage = await createOpenAIMessage(userMessage, previousMessages);
            response.code(200).send({status: 200});
        } catch (requestError) {
            console.log(`${requestError}`);
            response.send({error: requestError});
        }
    });
};