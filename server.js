const dotenv = require('dotenv').config();
const { Router } = require('express');
const express = require("express");
const routerProductos = Router();
const routerCarrito = Router();

const app = express();


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//const contenedor = new Contenedor("./productos.json");
//const carrito = new Contenedor("./carrito.json");

const administrador = true;



//carrito



routerCarrito.get('*', (req, res) => {
    res.send({
        error: -2,
        description: 'Ruta no encontrada'
    })
} )


app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

const PORT = process.env.PORT
app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server running on port ${PORT}`);
});