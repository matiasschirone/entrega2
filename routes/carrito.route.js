const express = require('express');
const routerCarrito = express.Router();
const { getCarrito, getCarritoById, postCarrito, putCarrito, deleteCarrito } = require('../controllers/carrito.controller.js');

routerCarrito.get('/', getCarrito);
routerCarrito.get('/:id', getCarritoById);
routerCarrito.post('/', postCarrito);
routerCarrito.put('/:id', putCarrito);
routerCarrito.delete('/:id', deleteCarrito);

module.exports = routerCarrito;
