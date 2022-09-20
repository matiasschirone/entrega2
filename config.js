export default {
    FileSystem: {
        path: '.DB',
    },
    Mongo : {
        cnxStr : 'mongodb://localhost:comercio electrónico' ,
        opciones : {
            useNewUrlParser : verdadero ,
            useUnifiedTopology : verdadero ,
            useCreateIndex : verdadero ,
            serverSelectionTimeoutMS : 5000 ,
        } ,
    } ,
    optionSqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './DB/mydb.sqlite'
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