"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDef = void 0;
const typeDef = `
  type Query {
    hello: String
  }
`;
exports.typeDef = typeDef;
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};
exports.resolvers = resolvers;