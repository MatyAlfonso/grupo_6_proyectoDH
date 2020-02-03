const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');


let userValidation = [
  check('email').isEmail().withMessage('► El campo debe ser un email válido'),
  check('password').isLength({ min: 4, max: 20 }).withMessage('► El password debe tener entre 4 y 20 caracteres'),
]

/* Users Controller */
const usersController = require('../controllers/usersController');

/* GET users listing. */

/*login*/
router.get('/login', usersController.login);
router.post('/login', userValidation, usersController.processLogin);

/* register */
router.get('/register', usersController.register);
router.post('/register', userValidation, usersController.processRegister);

/* welcome */
router.get('/welcome', usersController.welcome);


module.exports = router;