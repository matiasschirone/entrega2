import { ContenedorArchivo } from "../../contenedores/ContenedorArchivo";

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('../archivosDB/productos.json');
    }
}

module.exports = ProductosDaoArchivo 