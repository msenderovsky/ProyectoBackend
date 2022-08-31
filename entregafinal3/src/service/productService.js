const DAOProducts = require ("../daos/DAOProducts")

module.exports = class productService {

    async listProducts() {
        const listProds = await DAOProducts.listProducts()
        return listProds
    }

    async saveProduct(prod) {
        const toSave = await DAOProducts.saveProduct(prod)
        return toSave
    }

    async deleteProduct(productID){
        const toDelete = await DAOProducts.deleteProduct(productID)
        return toDelete
    }

    async updateProduct(productID, body){
        const updProduct = await DAOProducts.updateProduct(productID,body)
        return updProduct
    }

    async findByiD(productID) {
        const findProduct = await DAOProducts.findByID(productID)
        return findProduct
    }

    async findCategory(category){
        const categoryFind = await DAOProducts.findCategory(category)
        return categoryFind
    }

    async deleteProducts(){
        const toDelete = await DAOProducts.deleteProducts()
        return toDelete
    }
}
