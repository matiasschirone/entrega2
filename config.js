export default {
    FileSystem: {
        path: '.DB',
    },
    Mongo: {
        cnxStr: 'mongodb://localhost:ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        },
    },
    optionSqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './ecommerce/mydb.sqlite'
        },
        useNullAsDefault: true
    },
    options: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'clase7'
        }
    }

}