const express = require('express');
const usersController = require('../controller/user-controller');

const router = express.Router();

router.get('/' , usersController.getUsers);

router.post('/signup', usersController.signUp);

router.post('/login', usersController.logIn);

module.exports = router;