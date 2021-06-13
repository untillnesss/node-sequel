const enums = require('./enums')

module.exports = {
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
