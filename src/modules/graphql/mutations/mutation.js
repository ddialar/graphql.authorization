import { GraphQLObjectType } from 'graphql';

import * as test from './test.mutation';

var MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        runMutation: test.runMutation
    })
});

export default MutationType;
