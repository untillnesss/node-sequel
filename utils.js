const enums = require('./enums')

const utils = {
    success({ res, data, message = 'Berhasil !' }) {
        return res.json({
            status: enums.success,
            data,
            message
        });
    },
    error({ res, data, message = 'Error !' }) {
        return res.json({
            status: enums.error,
            data,
            message
        });
    },
    fail({ res, data, message = 'Gagal !' }) {
        return res.json({
            status: enums.fail,
            data,
            message
        });
    }
}

module.exports = utils