var express = require('express');
var router = express.Router();

// Products controller
var productsController = require('../controllers/productsController');

/* GET users listing. */
// Detalle del producto
router.get('/product-detail/:id', productsController.detail);

//Listado de los productos
router.get('/products-list', productsController.list);

//Creación del producto
router.get('/product-create',productsController.add);
router.post('/product-create', productsController.create);

//Edición del producto
router.get('/edit/:id',productsController.edit);
router.post('/edit/:id',productsController.update);

module.exports = router;
