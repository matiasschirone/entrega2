const { response } = require('express');

const ProductosDaoArchivo = require('../daos/productos/ProductosDaoArchivo.js')
const productosDaoArchivo = new ProductosDaoArchivo('../archivosDB/productos.json')

//const {productoDao: productosApi } = require('..daos/index.js')

const getProducts = async(req, res) => {   
    let productos = await productosDaoArchivo.getAll()
    res.send(productos)
} 

const getProductById = async(req, res) => {
    const id = req.params.id
    let productoId = await productosDaoArchivo.getById(id)
    res.send(productoId)
} 

const postProduct = async(req, res) => {
    if (administrador) {
        const contenedor = new Contenedor('productos.json');
        let producto = await contenedor.save(req.body)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para agregar productos" })
    }
} 

const putProduct = async(req, res) => {
    if (administrador) {
        const contenedor = new Contenedor('productos.json');
        let producto = await contenedor.updateById(req.params.id, req.body)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para actualizar productos" })
    }
} 

const deleteProduct = async(req, res) => {
    if (administrador) {
        const contenedor = new Contenedor('productos.json');
        let producto = await contenedor.deleteById(req.params.id)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para eliminar productos" })
    }
} 


routerProductos.get('*', (req, res) => {
    res.send({
        error: -2,
        description: 'Ruta no encontrada'
    })
} )

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
}

