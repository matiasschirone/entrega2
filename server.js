const dotenv = require('dotenv').config();
const { Router } = require('express');
const express = require("express");
const { options } = require('./mariaDB/conexionDB');
const { optionSqlite3 } = require('./sqlite3/conexionSqlite3');

const knex = require('knex')(options);
const knexSqlite3 = require('knex')(optionSqlite3);

const { Server: HttpServer } = require("http");
const { Server: IoServer } = require("socket.io");
const app = express();
const httpServer = new HttpServer(app);
const io = new IoServer(httpServer);

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const administrador = true;


app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

const PORT = process.env.PORT
app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server running on port ${PORT}`);
});