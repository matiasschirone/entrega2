const ContenedorSQL = require("./ContenedorSQL");

class ProductosDaoMariaDb extends ContenedorSQL {
    constructor() {
        super('productos');
    }
}

module.exports = ProductosDaoMariaDb