const enums = require('./enums')

const utils = {
    success({ res, data, message = 'Berhasil !' }) {
        return res.json({
            status: enums.success,
            message,
            data,
        });
    },
    error({ res, data, message = 'Error !' }) {
        return res.json({
            status: enums.error,
            message,
            data,
        });
    },
    fail({ res, data, message = 'Gagal !' }) {
        return res.json({
            status: enums.fail,
            message,
            data,
        });
    }
}

module.exports = utils