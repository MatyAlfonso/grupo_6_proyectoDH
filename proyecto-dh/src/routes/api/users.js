const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersController');

router.get('/', usersAPIController.list);
router.get('/:id', usersAPIController.find);

module.exports = router;