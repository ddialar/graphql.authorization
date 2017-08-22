import log4js from '../../../shared/logger';

import {
    GraphQLString
} from 'graphql';

var logger = log4js.getLogger();

var runQuery = {
    type: GraphQLString,
    description: 'Test value.',
    resolve: (parentValues, args, context) => {
        return 'GraphQL query OK';
    }
};

export {
    runQuery
};