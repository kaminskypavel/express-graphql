import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

export default resolvers;
