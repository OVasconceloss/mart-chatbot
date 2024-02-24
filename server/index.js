import Fastify from 'fastify';
import fastifyRoutes from './routes/routes.js';

const serverFastify = Fastify();
serverFastify.register(fastifyRoutes);

const startFastifyServer = async () => {
    try {
        await serverFastify.listen({port: 8080});
        console.log('The server is running on PORT 8080');
    } catch (serverError) {
        console.log(`An error occurred while running the server: ${serverError}`);
        process.exit(1);
    }
};

startFastifyServer();