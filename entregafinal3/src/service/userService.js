const DAOUsers = require ("../daos/DAOUsers")

class userService {
    
    async save(body, passwordHash){
            const {name, phone, email} = body
            const save = await DAOUsers.save(name, phone, email, passwordHash)
            return(save)
    } 

    async getUsers(){
            const users = await DAOUsers.getUsers()
            return users
    }

    async findByID(id){
            const users = await DAOUsers.findByID(id)
            return users
    }

    async deleteUser(id){
          const toDelete = await DAOUsers.deleteUser(id)
          return toDelete
    }

    async deleteAlUsersl(){
        const toDelete = await DAOUsers.deleteAlUsersl()
        return toDelete
    }
    
    async updateUser(id){
        const update = await DAOUsers.update(id)
        return update
    }
}

export default new userService()