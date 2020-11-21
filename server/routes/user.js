const express = require('express');
const userController = require('../controllers/userController');
const tokenMiddleware = require('../middleware/token');

const router = express.Router();

router.post('/login', userController.login);
// router.post('/logout', userController.logout);
router.post('/token', userController.token);
router.post('/registration', userController.registration);
router.get('/info', tokenMiddleware.chekToken, userController.info);

module.exports = router;
