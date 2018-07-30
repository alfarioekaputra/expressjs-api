const express = require('express');
const app = express();

const userRouter = require('./modules/user/routers');

module.exports = userRouter(app, express)
