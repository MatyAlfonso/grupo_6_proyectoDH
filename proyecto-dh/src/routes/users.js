const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');

let userValidation = [
  check('email').isEmail().withMessage('► El campo debe ser un email válido'),
  check('password').isLength({ min: 4, max: 20 }).withMessage('► El password debe tener entre 4 y 20 caracteres'),
]

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post('/login', userValidation, function (req, res) {
  let result = validationResult(req);
  console.log(result);
  if (!result.isEmpty()) {
    return res.render('login', {
      errors: result.errors,
      data: req.body
    })
  }
  res.redirect(301, '/users/welcome');
});


router.get('/register', function (req, res) {
  res.render('register');
});

router.post('/register', userValidation, function (req, res) {
  let result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render('register', {
      errors: result.errors,
      data: req.body
    })
  }

  let passwordEncriptada = bcrypt.hashSync(req.body.password,10);

  const newUser = {
    email: req.body.email,
    password: passwordEncriptada
  };

  let users = fs.readFileSync('src/data/users.json', { encoding: 'utf-8' })
  users = JSON.parse(users);
  users.push(newUser);
  users = JSON.stringify(users);
  fs.writeFileSync('src/data/users.json', users);

  res.redirect(301, '/users/login');
});

router.get('/welcome', function (req, res) {
  res.end(`Bienvenido: `);
});


module.exports = router;