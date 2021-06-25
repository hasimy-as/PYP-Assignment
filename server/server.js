const express = require('express');
const corsMiddleware = require('cors');

const mainAPI = require('./app/api/index.js');
const { STATUS_CODE: code, MESSAGE: msg } = require('./helpers/commons');

const port = 5000;
const app = express();

app.use(express.json());
app.use(corsMiddleware());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainAPI);
app.get('/', (req, res) => res.json({
  success: true,
  data: '',
  message: 'This server is running properly',
  code: code.SUCCESS
}));

app.get('*', (req, res) => res.json({
  success: false,
  data: '',
  message: msg.NOT_FOUND,
  code: code.NOT_FOUND
}));

app.listen(port, (err) => err ? console.error(err) : console.log(`Connected to localhost:${port}`));
