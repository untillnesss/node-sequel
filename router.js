const router = require('express').Router();
const userController = require('./controller/userController')
const postController = require('./controller/postController')

router.get('/users', userController.index);
router.post('/users/create', userController.create);
router.get('/users/posts', userController.post);
router.get('/users/:id', userController.show);
router.delete('/users/:id', userController.delete);

router.get('/posts', postController.index);
router.post('/posts/create', postController.create);
router.get('/posts/:id', postController.show);
router.delete('/posts/:id', postController.delete);

module.exports = router;