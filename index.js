require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { User } = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', async (req, res) => {
    try {
        const allUser = await User.findAll();

        return res.json(allUser);
    } catch (erro) {
        console.log(erro)
    }
});

app.post('/users/create', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({
            name, email, password,
        });

        return res.json(newUser);
    } catch (erro) {
        console.log(erro)
    }
});

app.listen(process.env.APP_PORT, () => console.log('Runing'));
