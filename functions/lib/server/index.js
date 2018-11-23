"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _apolloServerExpress = require("apollo-server-express");

var _lodash = require("lodash");

var _api = _interopRequireDefault(require("./api"));

var _query = require("./graphql/query");

var _apolloLink = require("apollo-link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const app = (0, _express.default)();
app.use((0, _cors.default)(corsOption));
/* app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev')); */

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use('/api', _api.default);
/*
Apollo Server (GraphQL)
*/

const resolvers = {};
const schema = (0, _apolloServerExpress.makeExecutableSchema)({
  typeDefs: [_query.typeDef],
  resolvers: (0, _lodash.merge)(resolvers, _query.resolvers)
});
const apolloServer = new _apolloServerExpress.ApolloServer({
  schema: schema,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light'
    }
  }
}); // app.use(path, jwtCheck);

apolloServer.applyMiddleware({
  app: app,
  path: '/graphql'
});
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
var _default = app;
exports.default = _default;