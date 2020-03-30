const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');
let db = require('../../database/models');

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

        db.Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: passwordEncriptada,
            image: req.files[0].filename
        })

        return res.redirect(301, '/users/login');
    },
    login: function (req, res) {
        return res.render('login');
    },
    processLogin: function (req, res) {

        db.Users.findOne({ where: { email: req.body.email } }).then(user => {

            let result = validationResult(req);

            if (user == null) {
                return res.render('login', {
                    errors: result.errors,
                    data: req.body
                })
            }

            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.usuarioLogueado = user;
            } else {
                return res.render('login', {
                    errors: [{ msg: "►Usuario y/o contraseña incorrecto/s" }]
                });
            }

            if (req.body.recordarme != undefined) {
                res.cookie("recordarme",
                    usuarioALoguearse.email, { maxAge: 60000 })
            }
            res.redirect(301, '/users/welcome');
        })
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect("/");
    },
    welcome: function (req, res) {
        res.end(`Bienvenido: ` + req.session.usuarioLogueado.email);
    },
    profile: function (req, res) {
        db.Users.findByPk(req.session.usuarioLogueado.id)
            .then(function (user) {
                res.render('profile', { user: user })
            })
    },
    edit: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(function (user) {
                res.render('user-edit', { user: user })
            })
    },
    update: function (req, res, next) {
        let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);
        db.Users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: passwordEncriptada,
            image: req.files[0].filename
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/users/edit/" + req.params.id);
    }/*,
    detailProfile: function (req, res) {
        db.Users.findByPk(req.session.usuarioLogueado.id)
            .then(function (user) {
                res.render('profile', { user: user })
            })
    },
    editProfile: function (req, res) {
        db.Users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: passwordEncriptada,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/users/profile");
    }*/,
    add: function (req, res) {
        res.render('crearUsuario');
    },
    create: function (req, res) {
        db.Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            image: req.body.image
        })

        res.redirect("/users/users-list");
    },
    list: function (req, res) {
        sequelize.query("SELECT * FROM users")
            .then(function (results) {
                let users = results[0];
                res.render("users-list", { users: users });
            })
    },
    detailDelete: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(function (user) {
                res.render('user-delete', { user: user })
            })
    },
    delete: function (req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/users/register");
    }

}

module.exports = usersController;