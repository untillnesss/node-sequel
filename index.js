require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json('masuk pak eko');
});

app.listen(process.env.APP_PORT, () => console.log('Runing'));
