const express = require('express');
const apiDocsRouter = require('./routes/apiDocs'); // adjust path as needed
const app = express();
const statusRoute = require('./routes/status'); // adjust path as needed


app.use('/api/v1/docs', apiDocsRouter);
app.use('/', statusRoute);

module.exports = app;
