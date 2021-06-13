require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { User } = require('./models');
const myResponse = require('./utils')
const enums = require('./enums')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', async (req, res) => {
    try {
        const allUser = await User.findAll();

        return myResponse.success({ res, status: enums.success, data: allUser, });
    } catch (error) {
        myResponse.error({ res, data: error })
    }
});

app.post('/users/create', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({
            name, email, password,
        });

        return myResponse.success({ res, data: newUser });
    } catch (error) {
        myResponse.error({ res, data: error })
    }
});

app.listen(process.env.APP_PORT, () => console.log('Runing'));
