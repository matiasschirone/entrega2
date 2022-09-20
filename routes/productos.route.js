const express = require('express');
const routerProductos = express.Router();
const { getProducts, getProductsById, postProducts, putProducts, deleteProducts } = require('../controllers/productos.controller.js');

routerProductos.get('/', getProducts);
routerProductos.get('/:id', getProductsById);
routerProductos.post('/', postProducts);
routerProductos.put('/:id', putProducts);
routerProductos.delete('/:id', deleteProducts);

module.exports = routerProductos;