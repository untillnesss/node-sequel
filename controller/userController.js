
const { User } = require('../models');
const myResponse = require('../utils')
const enums = require('../enums')

const userController = {
    async index(req, res) {
        try {
            const allUser = await User.findAll();

            return myResponse.success({ res, status: enums.success, data: allUser, });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
    async create(req, res) {
        const { name, email, password } = req.body;

        try {
            const newUser = await User.create({
                name, email, password,
            });

            return myResponse.success({ res, data: newUser });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
    async show(req, res) {
        let params = req.params;
        try {
            const user = await User.findByPk(params.id);

            return myResponse.success({ res, status: enums.success, data: user, });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
}

module.exports = userController