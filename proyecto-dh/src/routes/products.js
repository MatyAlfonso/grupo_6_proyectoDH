var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

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
router.get('/product-create', productsController.add);
router.post('/product-create', upload.any(), productsController.create);

//Edición del producto
router.get('/edit/:id',productsController.edit);
router.post('/edit/:id', upload.any(), productsController.update);

//Borrado del producto
router.get('/delete/:id',productsController.detailDelete);
router.post('/delete/:id',productsController.delete);

module.exports = router;
