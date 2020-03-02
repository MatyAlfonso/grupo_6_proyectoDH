const express = require('express');
const router = express.Router();
let db = require('../../database/models');
let sequelize = db.sequelize;

let productsController = {

    detail: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                res.render('detalle-producto', { product: product })
            })
        
    },
    list: function (req, res) {
        sequelize.query("SELECT * FROM products")
            .then(function (results) {
                let products = results[0];
                res.render('products-list', { products: products });
            })

    },
    add: function (req, res) {
        res.render('product-create');
    },
    create: function (req, res) {
        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            colors: req.body.colors,
            price: req.body.price,
            image: req.body.image
        })
        res.redirect("/products/products-list");
    },
    edit: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                res.render('product-edit', { product: product })
            })
    },
    update: function (req, res) {
        db.Products.update({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            colors: req.body.colors,
            price: req.body.price,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products/edit/" + req.params.id);
    },
    detailDelete : function(req,res){
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                res.render('product-delete', { product: product })
            })
    },
    delete: function (req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products/products-list");
    }

}

module.exports = productsController;