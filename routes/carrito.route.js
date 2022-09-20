const express = require('express');
const { getCarrito, getCarritoById, postCarrito, putCarrito, deleteCarrito } = require('../controllers/carrito.controller.js');
const { Router } = express;
const routerCarrito = Router();

routerCarrito.get('/', getCarrito);
routerCarrito.get('/:id', getCarritoById);
routerCarrito.post('/', postCarrito);
routerCarrito.put('/:id', putCarrito);
routerCarrito.delete('/:id', deleteCarrito);

module.exports = routerCarrito;
