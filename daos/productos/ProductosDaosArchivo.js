const { ContenedorArchivo } = require('../../contenedores/ContenedorArchivo');

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('../archivosDB/productos.json');
    }
}

module.exports = ProductosDaoArchivo 