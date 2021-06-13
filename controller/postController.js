
const { Post, User } = require('../models');
const myResponse = require('../utils')
const enums = require('../enums')

const postController = {
    async index(req, res) {
        try {
            const allPost = await Post.findAll({include: 'user'});

            return myResponse.success({ res, status: enums.success, data: allPost ?? [], });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
    async create(req, res) {
        const { user_id, content } = req.body;

        // const user = await User.findByPk(user_id);

        try {
            const newPost = await Post.create({
                content, userId: user_id
            });

            return myResponse.success({ res, data: newPost });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
    async show(req, res) {
        let params = req.params;
        try {
            const Post = await Post.findByPk(params.id);

            return myResponse.success({ res, status: enums.success, data: Post ?? [], });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
    async delete(req, res) {
        let params = req.params;
        try {
            const Post = await Post.destroy({
                where: {
                    id: params.id
                }
            });

            return myResponse.success({ res, status: enums.success, data: Post ?? [], });
        } catch (error) {
            myResponse.error({ res, data: error })
        }
    },
}

module.exports = postController