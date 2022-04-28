const FileContainer= require('../../contenedor/MongoDBContainer')

class DAOProducts extends FileContainer{
    constructor(){
        super('./__temporal__/productos.txt')
    }

    async listProducts(){
        try{
            const list= await super.read()
            return list
        }catch(e){
            throw new Error (e.message)
        }
    }

    async saveProduct(data){
        try{
            await super.save(data)
            return data
        }catch(e){
            throw new Error(e.message)
        }
    }
}

module.exports = new DAOProducts