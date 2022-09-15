import User from "../models/users.js"

class DAOUsers {

    async save(name,phone,email,passwordHash){
       const save = await  User.create({
        name: name,
        phone: phone,
        email: email,
        password: passwordHash
       })
       return save 
    }

    async getUsers() {
        const users = await User.find()
        return users 
    }

    async findByID(id) {
        const users = await User.findById({_id:id})
        return users 
    }

    async deleteUser(id){
        const toDelete = await User.findByIdAndDelete({_id: id})
        return toDelete
    }

    async deleteAllUsers(){
        const toDelete = await User.deleteMany({})
        return toDelete
    }

    async update(id){
        const toUpdate = await User.findByIdAndUpdate({_id: id})
        return toUpdate
    }

}

export default new DAOUsers()