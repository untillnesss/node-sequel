const router = require('express').Router();
const userController = require('../controller/userController')

router.get('/users', userController.index);
router.post('/users/create', userController.create);

module.exports = router;