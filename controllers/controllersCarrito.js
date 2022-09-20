const { response } = require('express');

const CarritoDaoArchivo = require('../daos/carrito/CarritoDaoArchivo.js')

const carritoDaoArchivo = new CarritoDaoArchivo('./archivoDB/carrito.json')

//crea carrito y devuelve su id
const postCarrito = async(req, res = response) => {
    const objProducto = req.body
    console.log(req.body)
   
    let producto = await carritoDaoArchivo.save(objProducto)
    res.send({
        message: 'Producto guardado',
        objProducto
    })
} 


//vacia un carrito y lo elimina
const deleteCarrito = async(req, res = response) => {
    const { id } = req.params
    
    let producto = await carritoDaoArchivo.deleteId(parseInt(id))
    res.send({
        message: 'Producto eliminado',
        id
    })
} 


//incorpora productos al carrito por su id
//routerCarrito.post('/:id/productos/:id_prod', async(req, res) => {
const postbyIDCarrito = async(req, res = response) => {
    const { id, id_prod } = req.params

    const productById = await productoDaoArchivo.getById(parseInt(id_prod))
    console.log("productById", productById)
    let carritoById = await carritoDaoArchivo.addProductToCart(id, productById)

    res.send({
        message: 'Producto agregado al carrito',
        carritoById
    })
} 


//elimina un producto por su id de carrito y de producto
//routerCarrito.delete('/:id/productos/:id_prod', async(req, res) => {
const deleteByIdCarrito = async(req, res = response) => {
    
    const { id, id_prod } = req.params

    let carritoById = await carritoDaoArchivo.deleteProductFromCart(id, id_prod)

    res.send({
        message: 'Producto eliminado del carrito',
        carritoById
    })
}

//routerCarrito.get('/:id', async(req, res = response) => {
const getCarritoById = async(req, res = response) => {
    const id = req.params.id
    
    let productoId = await carritoDaoArchivo.getById(id)   
    res.send(productoId)
} 

//me permite listar todos los productos listados en el carrito
//routerCarrito.get('/:id/productos', async(req, res) => {
const listarCarrito = async(req, res = response) => {
    const id = req.params.id

    let productoId = await carritoDaoArchivo.getById(id)
    res.send(productoId)
} 


/*getCarritoError (req, res) => {
    res.send({
        error: -2,
        description: 'Ruta no encontrada'
    })
} */

module.exports = { postCarrito, deleteCarrito, postbyIDCarrito, deleteByIdCarrito, getCarritoById, listarCarrito }