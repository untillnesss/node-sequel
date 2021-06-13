
const { User } = require('../models');
const myResponse = require('../utils')
const enums = require('../enums')

module.exports = {
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
}