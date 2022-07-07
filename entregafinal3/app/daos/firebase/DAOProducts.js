const FirebaseContainer = require('../../container/FirebaseContainer')

class DAOProducts extends FirebaseContainer{
    constructor(){
        super()
    }

    async saveProduct(data){
        const product = await super.save(data, 'products')
        return product
    }

    async listProductos(){
        let docs = await super.list('products')
        const res = docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            price: doc.data().price,
            url: doc.data().url,
        }))
        return res
    }

    async showProducto(id){
        const product = await super.showElement('products', id)
        return product
    }

    async updateProduct(data, id){
        const product = await super.update('products', data, id)
        return product
    }

    async deleteProduct(id){
        const product = await super.eliminar('products', id)
        return product
    }

}

module.exports = new DAOProducts()