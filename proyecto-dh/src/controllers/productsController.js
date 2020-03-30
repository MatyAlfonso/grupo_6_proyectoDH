const express = require('express');
const router = express.Router();
let db = require('../../database/models');
let _= require('underscore');


let productsController = {

    detail: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                res.render('detalle-producto', { product: product })
            })
        
    },
    list: function (req, res) {
        db.Products.findAll({raw : true})
            .then(function (results) {
                let products = _.chunk(results, 3);
                console.log(products);
                res.render('products-list', { products: products });
            })

    },
    listMen: function (req, res) {
        db.Products.findAll({
            where: {
              category: 'Hombres'
            }
          },
          {raw : true})
            .then(function (results) {
                let products = _.chunk(results, 3);
                console.log(products);
                res.render('men', { products: products });
            })

    },
    listWomen: function (req, res) {
        db.Products.findAll({
            where: {
              category: 'Mujeres'
            }
          },
          {raw : true})
            .then(function (results) {
                let products = _.chunk(results, 3);
                console.log(products);
                res.render('women', { products: products });
            })

    },
    listKids: function (req, res) {
        db.Products.findAll({
            where: {
              category: 'Kids'
            }
          },
          {raw : true})
            .then(function (results) {
                let products = _.chunk(results, 3);
                console.log(products);
                res.render('kids', { products: products });
            })

    },
    listSale: function (req, res) {
        db.Products.findAll({
            where: {
              category: 'Ofertas'
            }
          },
          {raw : true})
            .then(function (results) {
                let products = _.chunk(results, 3);
                console.log(products);
                res.render('sale', { products: products });
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
            image: req.files[0].filename
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
            image: req.files[0].filename
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