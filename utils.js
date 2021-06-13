const enums = require('./enums')

const utils = {
    success({ res, data }) {
        return res.json({
            status: enums.success,
            data
        });
    },
    error({ res, data }) {
        return res.json({
            status: enums.error,
            data
        });
    },
    fail({ res, data }) {
        return res.json({
            status: enums.fail,
            data
        });
    }
}

module.exports = utils