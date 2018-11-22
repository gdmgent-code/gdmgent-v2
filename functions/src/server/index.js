import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import apiRoutes from './api';

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