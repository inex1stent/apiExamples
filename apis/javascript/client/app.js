const app = require('express')();
const route = require('../router/router');

app.use(route);

module.exports = app;