const { ContenedorArchivo } = require('../../contenedores/ContenedorArchivo.js');

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./archivosDB/carrito.json');
    }

    async addProductToCart(idCart, objProduct){
        try{
            let dataArch = await this.readFileFunction(this.ruta)

            let carrito = dataArch.find(carrito => carrito.id == idCart)
            console.log(carrito)
            if (carrito) {
                carritoDaoArchivo.productos.push(objProduct)
                await fs.promises.writeFile(this.ruta, JSON.stringify( dataArch, null, 2))
                return {msg: 'producto agregado al carrito'}    
            } else {
                return {error: 'no existe el carrito'}
            }
        } catch (error) {
            console.log(error)
        }

	}

	async deleteProductFromCart(idCart, idProduct) {
		try {
            let dataArch = await this.readFileFunction(this.ruta)

            let prodFilter = dataArch.filter(cart => cart.id == idCart)
            console.log("prodFilter", prodFilter)

            if (prodFilter) {
                
                prodFilter[0].productos = prodFilter[0].productos.filter(producto => producto.id != idProduct)
                await fs.promises.writeFile(this.ruta, JSON.stringify(prodFilter, null, 2))
                return {msg: 'producto eliminado'}
            } else {
                return {error: 'no existe el producto'}
            }

            } catch (error) {       
            console.log(error)
        }
    }       
}

module.exports = CarritoDaoArchivo 