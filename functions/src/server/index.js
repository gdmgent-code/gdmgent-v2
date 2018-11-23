import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { merge } from 'lodash';

import apiRoutes from './api';
import { 
  typeDef as Query, 
  resolvers as queryResolvers,
} from './graphql/query';
import { empty } from 'apollo-link';

/*
Cors
*/
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

/*
Express
*/
const app = express();
app.use(cors(corsOption));
/* app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev')); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api', apiRoutes);

/*
Apollo Server (GraphQL)
*/
const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Query],
  resolvers: merge(resolvers, queryResolvers),
});

const apolloServer = new ApolloServer({ 
  schema: schema,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light'
    }
  },
});
// app.use(path, jwtCheck);
apolloServer.applyMiddleware({ app: app, path: '/graphql' });

/*
Error
*/
app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: err
  });
});

export default app;