const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/avatar')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })


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
router.post('/register', upload.any(), userValidationMiddleware, usersController.processRegister);

/* Ruta para chequear que el session funciona */
router.get('/check', function (req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send("No estás logueado");
  } else {
    res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
  }
});

/* profile */
router.get('/profile', usersController.profile);
/* Update */
router.get('/edit/:id', usersController.edit);
router.post('/edit/:id', upload.any(), usersController.update);

/*router.get('/profile/:id/edit', usersController.detailProfile);
router.post('/profile/:id/edit', usersController.editProfile);*/

/* welcome */
router.get('/welcome', usersController.welcome);

/* test db: Create, Read */
router.get('/add', usersController.add); //Ruta para la vista de creación de usuarios manualmente
router.post('/add', usersController.create); //Ruta para crear usuarios manualmente
router.get('/users-list', usersController.list); //Ruta para ver la lista de usuarios creados



/* Delete */
router.get('/delete/:id', usersController.detailDelete);
router.post('/delete/:id', usersController.delete);

/*logout*/
router.get('/logout', usersController.logout);


module.exports = router;