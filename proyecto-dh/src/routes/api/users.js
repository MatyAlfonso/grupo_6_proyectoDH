const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersController');

router.get('/', usersAPIController.list);

module.exports = router;