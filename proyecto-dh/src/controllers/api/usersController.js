const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');
let db = require('../../../database/models');

let usersController = {
    list: function (req, res) {
        db.Users.findAll()
            .then(function (users) {

                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue("detail", "/api/users/" + users[i].id);
                }
        
                let results = {
                    meta: {
                        status: 200,
                        url: "/api/users",
                        count: users.length
                    },
                    data: users
                }
                res.json(results);
            })
    },
    find: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(function (product) {
                product.setDataValue("imageURL", "/images/avatar/" + product.image)
                res.json(product);
            })
    }
}

module.exports = usersController;