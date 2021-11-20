import config from '@/config';
import ExpressServer from '@/server';
import logger from '@/utils/logger';

const launchServer = async () => {
    const expressServer = new ExpressServer(config.URL_PORT);
    try {
        expressServer.launch();
        logger.info('Express server running');
    } catch (error: any) {
        logger.error('Express Server failure %s', error.message);
        await expressServer.close();
    }
};

launchServer().catch(e => logger.error(e));
