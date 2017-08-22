import log4js from './shared/logger';

import { environment, serverConf } from './config';

import express from 'express';

import graphqlHTTP from 'express-graphql';
import schema from './modules/graphql/schema';

var logger = log4js.getLogger();

const app = express();

app.use(
    '/graphql',
    graphqlHTTP((request, response, graphQLParams) => ({
        schema: schema,
        graphiql: ((environment.match('development')) ? true : false),
        context: { 
            request: request, 
            test: 'Example context value'
        }
    }))
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