const {admin, serviceAccount} = require('../config/config')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ecommerce-dde6f.firebaseio.com'
})
const db = admin.firestore()

module.exports = class FirebaseContainer{
    constructor(){
    }

    async save(data, collection) {
        const query = db.collection(collection)
        const doc = query.doc()
        const element = await doc.create(data)
        return element
    }

    async list(collection){
        const query = db.collection(collection)
        const query2 = await query.get()
        let docs = query2.docs
        
        const res = docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            price: doc.data().price,
            url: doc.data().url,
        }))

        return res
    }

    async listSublist(data, model){
        
    }
    
    async showElement(collection, id){
        const query = db.collection(collection)
        const doc = query.doc(id)
        const item = await doc.get()
        const res = item.data()
        res.id = id
        return res
    }
    
    async update(collection, data, id){
        const query = db.collection(collection)
        const doc = query.doc(id)
        const item = await doc.update(data, {id: id})
        return item
    }

    async delete(collection, id){
        const query = db.collection(collection)
        const doc = query.doc(id)
        const item = await doc.delete({id: id})
        return item
    }
}