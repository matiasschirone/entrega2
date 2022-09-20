const { response } = require('express');

const ProductosDaoArchivo = require('../daos/productos/ProductosDaoArchivo.js')
const productosDaoArchivo = new ProductosDaoArchivo('../archivosDB/productos.json')

//const {productoDao: productosApi } = require('..daos/index.js')
routerProductos.get('/', async(req, res) => {
 console.log('productosDaoArchivo', productosDaoArchivo)
    let productos = await productosDaoArchivo.getAll()
    res.send(productos)
} )

routerProductos.get('/:id', async(req, res) => {
    const id = req.params.id
    
    let productoId = await productosDaoArchivo.getById(id)
    res.send(productoId)
} )

routerProductos.post('/', async(req, res) => {
    if (administrador) {
       
        let producto = await productosDaoArchivo.save(req.body)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para agregar productos" })
    }
} )

routerProductos.put('/:id', async(req, res) => {
    if (administrador) {
       
        let producto = await productosDaoArchivo.updateById(req.params.id, req.body)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para actualizar productos" })
    }
} )

routerProductos.delete('/:id', async(req, res) => {
    if (administrador) {
      
        let producto = await productosDaoArchivo.deleteById(req.params.id)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para eliminar productos" })
    }
} )


routerProductos.get('*', (req, res) => {
    res.send({
        error: -2,
        description: 'Ruta no encontrada'
    })
} )


/*const getProducts = async(req, res) => {
   
    let productos = await productosDaoArchivo.getAll()
    res.send(productos)
} 

const getProductsById = async(req, res) => {
    const id = req.params.id
  
    let productoId = await productosDaoArchivo.getById(id)
    res.send(productoId)
} 

const postProducts = async(req, res) => {
    if (administrador) {
        
        let producto = await productosDaoArchivo.save(req.body)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para agregar productos" })
    }
} 

const putProducts = async(req, res) => {
    if (administrador) {
      
        let producto = await productosDaoArchivo.updateById(req.params.id, req.body)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para actualizar productos" })
    }
} 

const deleteProducts = async(req, res) => {
    if (administrador) {
     
        let producto = await productosDaoArchivo.deleteById(req.params.id)
        res.send(producto)
    } else {
        res.send({ error: "No tienes permisos para eliminar productos" })
    }
} 


module.exports = {
    getProducts,
    getProductsById,
    postProducts,
    putProducts,
    deleteProducts
  
}*/