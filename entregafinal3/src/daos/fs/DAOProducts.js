const FileContainer = require('../../container/FileContainer')
import {myLoggerError } from '../../utils/logger.js'

class DAOProducts extends FileContainer{
    constructor(){
        super('./__temporal__/products.txt')
    }

    async listProducts(){
        try{
            const list = await super.read()
            return list
        }catch(error){
            myLoggerError.error("Error in listProducts " + error)
        }
    }

    async saveProduct(data){
        try{
            await super.save(data)
            return data
        }catch(error){
            myLoggerError.error("Error in saveProduct " + error)
        }
    }
}

module.exports = new DAOProducts()