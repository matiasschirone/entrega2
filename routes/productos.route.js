const express = require('express');
const { getProducts, getProductsById, postProducts, putProducts, deleteProducts } = require('../controllers/productos.controller.js');
const { Router } = express;
const routerProductos = Router();

routerProductos.get('/', getProducts);
routerProductos.get('/:id', getProductsById);
routerProductos.post('/', postProducts);
routerProductos.put('/:id', putProducts);
routerProductos.delete('/:id', deleteProducts);

module.exports = routerProductos;