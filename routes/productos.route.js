const express = require('express');
const { getProducts, getProductById, postProduct, putProduct, deleteProduct } = require('../controllers/controllersProductos.js');
const routerProductos = express.Router();

routerProductos.get('/', getProducts);
routerProductos.get('/:id', getProductById);
routerProductos.post('/', postProduct);
routerProductos.put('/:id', putProduct);
routerProductos.delete('/:id', deleteProduct);
routerProductos.get('*', getErrorProduct);

module.exports = routerProductos;
