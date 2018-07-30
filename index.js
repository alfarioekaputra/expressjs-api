const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

//connnect to database mongodb
mongoose.connect('mongodb://localhost:27017/antiapi', {useNewUrlParser: true});

//configure app to use bodyParser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//register route user
const apiRouter = require('./src/routers');
app.use('/api/v1', apiRouter);

app.listen(port);
console.log(`Server http://localhost:${port}`);