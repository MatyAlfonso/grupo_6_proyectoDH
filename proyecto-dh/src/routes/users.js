const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');


/* Users Controller */
const usersController = require('../controllers/usersController');

/* Middleware require */
const userValidationMiddleware = require('../middlewares/userValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const profileMiddleware = require('../middlewares/profileMiddleware');

/* GET users listing. */

/*login*/
router.get('/login', profileMiddleware, usersController.login);
router.post('/login', userValidationMiddleware, usersController.processLogin);

/* register */
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', userValidationMiddleware, usersController.processRegister);

/* Ruta para chequear que el session funciona */
router.get('/check', function(req,res){
  if(req.session.usuarioLogueado == undefined){
    res.send("No estás logueado");
  } else {
    res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
  }
});

/* profile */
router.get('/profile', usersController.profile);

/* welcome */
router.get('/welcome', usersController.welcome);


module.exports = router;