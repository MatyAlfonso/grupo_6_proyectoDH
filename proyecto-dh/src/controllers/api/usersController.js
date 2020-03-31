const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const bcrypt = require('bcrypt');
let db = require('../../../database/models');

let usersController = {
    list: function (req, res) {
        res.send("NO molestes")
    }
}

module.exports = usersController;