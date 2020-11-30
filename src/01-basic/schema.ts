const {gql } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});


