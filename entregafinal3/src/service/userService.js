import DAOUsers from "../daos/DAOUsers.js"

class userService {
    
    async save(body, passwordHash){
            const name= body.name
            const phone=body.phone
            const email=body.email
            console.log(name + " " + phone +    " ")
            const save = await DAOUsers.save(name, phone, email, passwordHash)
            console.log(save)
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

    async deleteAllUsers(){
        const toDelete = await DAOUsers.deleteAllUsers()
        return toDelete
    }
    
    async updateUser(id){
        const update = await DAOUsers.update(id)
        return update
    }
}

export default new userService()