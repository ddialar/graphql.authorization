import log4js from '../../../shared/logger';

import {
    GraphQLString,
    GraphQLError
} from 'graphql';

var logger = log4js.getLogger();

var runMutation = {
    type: GraphQLString,
    resolve: (parentValues, args, context) => {
        logger.trace(`[context request keys  ] - ${Object.keys(context)}`);
        logger.trace(`[context request header] - ${(context.request.headers) ? Object.keys(context.request.headers) : null}`);
        logger.trace(`[context request header authorizaton] - ${(context.request.headers && context.request.headers.authorization) ? context.request.headers.authorization : null}`);
        
        return 'GraphQL mutation OK';
    }
};

export {
    runMutation
};