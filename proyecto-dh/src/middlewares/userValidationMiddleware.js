const { check, validationResult, body } = require('express-validator');

let userValidation = [
    check('email').isEmail().withMessage('► El campo debe ser un email válido'),
    check('password').isLength({ min: 4, max: 20 }).withMessage('► El password debe tener entre 4 y 20 caracteres'),
];

module.exports = userValidation;