const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');
let db = require('../../database/models');
let sequelize = db.sequelize;

let usersController = {
    register: function (req, res) {
        return res.render('register');
    },
    processRegister: function (req, res) {
        let result = validationResult(req);
        if (!result.isEmpty()) {
            return res.render('register', {
                errors: result.errors,
                data: req.body
            })
        }

        let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);

        const newUser = {
            email: req.body.email,
            password: passwordEncriptada
        };

        let users = fs.readFileSync('src/data/users.json', { encoding: 'utf-8' })
        users = JSON.parse(users);
        users.push(newUser);
        users = JSON.stringify(users);
        fs.writeFileSync('src/data/users.json', users);

        return res.redirect(301, '/users/login');
    },
    login: function (req, res) {
        return res.render('login');
    },
    processLogin: function (req, res) {
        let result = validationResult(req);
        if (result.isEmpty()) {
            let usersJSON = fs.readFileSync('src/data/users.json', { encoding: 'utf-8' })
            let users;
            if (usersJSON == " ") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            let usuarioALoguearse;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users[i].password)) {
                        usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [{ msg: "►Usuario y/o contraseña incorrecto/s" }]
                });
            }
            req.session.usuarioLogueado = usuarioALoguearse;

            if (req.body.recordarme != undefined){
                res.cookie("recordarme",
                usuarioALoguearse.email,{ maxAge: 60000 })
            }
            res.redirect(301, '/users/welcome');
        } else {
            return res.render('login', {
                errors: result.errors,
                data: req.body
            })
        }
    },
    welcome: function (req, res) {
        res.end(`Bienvenido: ` + req.session.usuarioLogueado.email);
    },
    profile : function(req,res){
        res.render('profile');
    }
}

module.exports = usersController;