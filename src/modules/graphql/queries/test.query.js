import {
    GraphQLString
} from 'graphql';

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