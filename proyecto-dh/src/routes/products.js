var express = require('express');
var router = express.Router();

// Products controller
var productsController = require('../controllers/productsController');

/* GET users listing. */
// Detalle del producto
router.get('/product-detail/:id', productsController.detail);

/////////////////////////////////////////////////////////////////////////////////////
//Listado de los productos
router.get('/products-list', productsController.list);
//Listado de los productos hombres
router.get('/men', productsController.listMen);
//Listado de los productos mujeres
router.get('/women', productsController.listWomen);
//Listado de los productos kids
router.get('/kids', productsController.listKids);
//Listado de los productos oferta
router.get('/sale', productsController.listSale);
/////////////////////////////////////////////////////////////////////////////////////

//Creación del producto
router.get('/product-create',productsController.add);
router.post('/product-create', productsController.create);

//Edición del producto
router.get('/edit/:id',productsController.edit);
router.post('/edit/:id',productsController.update);

//Borrado del producto
router.get('/delete/:id',productsController.detailDelete);
router.post('/delete/:id',productsController.delete);

module.exports = router;
