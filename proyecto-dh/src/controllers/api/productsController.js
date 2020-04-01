const express = require('express');
const router = express.Router();
let db = require('../../../database/models');
let _ = require('underscore');


let productsController = {
    list: function (req, res) {
        db.Products.findAll()
            .then(function (products) {

                for (let i = 0; i < products.length; i++) {
                    products[i].setDataValue("detail", "/api/products/" + products[i].id);
                }

                function countByCategory(categoria) {
                    let contador = 0;
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].category == categoria) {
                            contador++;
                        }
                    }
                    return contador;
                }


                let results = {
                    meta: {
                        status: 200,
                        url: "/api/products",
                        count: products.length,
                        countByCategory: {
                            "Hombres": countByCategory("Hombres"),
                            "Mujeres": countByCategory("Mujeres"),
                            "Kids": countByCategory("Kids"),
                            "Ofertas": countByCategory("Ofertas")
                        }

                    },
                    data: products
                }
                res.json(results);
            })
    },
    find: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                product.setDataValue("imageURL", "/images/products/" + product.image)
                res.json(product);
            })
    }
}

module.exports = productsController;