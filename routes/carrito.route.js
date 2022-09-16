const { response } = require('express');
const express = require('express');
const { getCarrito, getCarritoById, postCarrito, deleteCarrito, postbyIDCarrito, deleteByIdCarrito } = require('../controllers/controllersCarrito.js');

const routerCarrito = express.Router();

routerCarrito.get('/', getCarrito);
routerCarrito.get('/:id', getCarritoById);
routerCarrito.post('/', postCarrito);
routerCarrito.delete('/:id', deleteCarrito);
routerCarrito.post('/:id/productos/:id_prod', postbyIDCarrito);
routerCarrito.delete('/:id/productos/:id_prod', deleteByIdCarrito);

module.exports = routerCarrito;

