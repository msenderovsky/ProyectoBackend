const MongoDBContainer = require('../container/MongoDBContainer')
//const myLoggerError= require ('../service/logger.js')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')

class DAOUsers extends MongoDBContainer{
    constructor(){
        super()
    }

    async addOUser(user){
        try{
            const savedUser = await super.save(user)
        }catch(error){
            myLoggerError.error("Error in addOrder " + error)
        }
    }
}

module.exports = new DAOUsers()