
module.exports = class MongoDBContainer{
    constructor(){
    }

    async save(data) {
        const addedElement = await data.save() 
        return addedElement
    }

    async list(data){
        const elements = await data.find()
        return elements
    }

    async listSublist(data, model){
        const elements = await data.find().populate(model)
        return elements
    }
    
    async showElement(data, id){
        const element = await data.findOne({_id: id})
        return element
    }
    
    async update(data){
        await data.save()
        return data
    }

    async delete(data, id){
        const toDelete = await data.deleteOne({_id : id})
        return toDelete
    }

}