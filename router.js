const router = require('express').Router();
const userController = require('./controller/userController')

router.get('/users', userController.index);
router.post('/users/create', userController.create);
router.get('/users/:id', userController.show);
router.delete('/users/:id', userController.delete);

module.exports = router;