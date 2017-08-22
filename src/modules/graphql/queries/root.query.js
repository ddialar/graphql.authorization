import { GraphQLObjectType } from 'graphql';

import * as test from './test.query';

var RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        runQuery: test.runQuery
    })
});

export default RootQueryType;