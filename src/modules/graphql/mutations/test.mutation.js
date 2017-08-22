import log4js from '../../../shared/logger';

import {
    GraphQLString,
    GraphQLError
} from 'graphql';

var logger = log4js.getLogger();

var runMutation = {
    type: GraphQLString,
    resolve: (parentValues, args, context) => {
        return 'GraphQL mutation OK';
    }
};

export {
    runMutation
};