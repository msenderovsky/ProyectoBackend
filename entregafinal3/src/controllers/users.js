import userService from "../service/user.services.js"

class userController {

    async getUsers(req,res){
        try {
            const getUsers = await userService.getUsers()
            res.send(getUsers)
        } catch (error) {
            myLoggerError.error("Error in getUser " + error)
        }
    }

    async findByID(req,res){
        try {
            const id = req.params.id
            const toFind = await userService.findByID(id)
            res.send(toFind)
        } catch (error) {
            myLoggerError.error("Error in getUser " + error)
        }
    }

    async deleteUser(req,res){
        try {
            const id = req.params.id
            const toDelete = await userService.deleteUser(id)
            res.send(toDelete).status(201) 
        } catch (error) {
            myLoggerError.error("Error in deleteUser " + error)
            return 
        }
    }
    async deleteUsers(req,res){
        try {
            const toDelete = await userService.deleteUsers()
            res.send(toDelete)
        } catch (error) {
            myLoggerError.error("Error in deleteUsers " + error)
            return 
        }
    }
    async updateUser(req,res){
        try {
            const id = req.params.id
            const toUpdate = await userService.updateUser(id)
            res.send(toUpdate)
        } catch (error) {
            myLoggerError.error("Error in deleteUsers " + error)
        }
    }
}

export default new userController()