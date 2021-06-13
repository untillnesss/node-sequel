require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router)

app.listen(process.env.APP_PORT, () => console.log('Runing'));
