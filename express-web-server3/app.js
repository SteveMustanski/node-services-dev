'use strict'

const express = require('express');
const createError = require('http-errors');
const http = require('http');

const indexRoutes = require('./routes/index');
const helloRoutes = require('./routes/hello');

const app = express();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

app.use('/', indexRoutes);
app.use('/hello', helloRoutes);

app.use((req, res, next) => {
  if (req.method !== 'GET') {
    next(createError(405));
    return;
  }
  next(createError(404));
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message)
})

server.listen(PORT);
