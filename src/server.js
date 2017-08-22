import log4js from './shared/logger';

import { environment, serverConf } from './config';

import express from 'express';

import expressGraphQL from 'express-graphql';
import schema from './modules/graphql/schema';

var logger = log4js.getLogger();

const app = express();

app.use(
    '/graphql',
    expressGraphQL({
        schema: schema,
        graphiql: ((environment.match('development')) ? true : false)
    })
);

app.listen(
    serverConf.SERVER_PORT,
    () => {
        logger.info('##########################################################');
        logger.info('#####               STARTING SERVER                  #####');
        logger.info('##########################################################\n');
        logger.info(`App running on ${environment.toUpperCase()} mode and listening on port ${serverConf.SERVER_PORT} ...`);
    }
);