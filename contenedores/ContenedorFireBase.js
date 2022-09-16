import admin from 'firebase-admin';
import config from '../config.js';

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
});

const db = admin.firestore();

class ContenedorFireBase {
    constructor(collection) {
        this.collection = db.collection(collection);
    }

    async listar(id) {
        try {
            const doc = await this.collection.doc(id).get();
            if (!doc.exists) {
                throw new Error('No se encontró el documento');
            }else{
                const data = doc.data();
                return {...data, id};
            }
        }catch(error){
            throw new Error(error);
        }

    }
    async listarAll() {
        try {
            const result = [];

        }catch(error){
            throw new Error(error);
        }
    }


}

export default ContenedorFireBase;