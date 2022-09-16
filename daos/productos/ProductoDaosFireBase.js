const ContenedorFireBase = require('../ContenedorFireBase');

class ProductosDaoFireBase extends ContenedorFireBase {
    constructor() {
        super('productos');
    }
}

module.exports = ProductosDaoFireBase