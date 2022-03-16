const fs = require('fs')

class Contenedor{
    constructor(fileName){
        this.fileName=fileName;
    }

    async save(object){
        let id = 1;
        let file=null
        let fileContent=[]
        try{
            file= await fs.promises.readFile(this.fileName, 'utf-8')
        }catch(error){
            if (error.code === "ENOENT") {
                await fs.promises.writeFile(this.fileName, "[]", 'utf-8')
                file= await fs.promises.readFile(this.fileName, 'utf-8')
            }else console.log('asd '+error);
        }
        const data= JSON.parse(file)
        id= data.length + 1
        object.id=id
        data.push(object)
        try{
            await fs.promises.writeFile(this.fileName, JSON.stringify(data,null,2))
            return object.id
        }catch(err){
            throw new Error('Error al escribir en el archivo')
        }
    }


    async getById(id){
        try{
            const data= await fs.promises.readFile(this.fileName, 'utf-8')
            const product= JSON.parse(data)
            const prodID= product.find((prod)=>prod.id===id)
            if (prodID){
                return prodID
            }
            else{
                return null
            }
        }catch(err){
            console.log(err.message)
        }
    }

    async update(id, body){
        try{
            const product = {
            title: body.title,
            price: body.price,
            thumbnail: "",
            id: id
            } 
            const data=JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'), 'utf8')
            const updateIndex= data.findIndex((producto)=> producto.id==id)
            data[updateIndex]=product
            return product
        }catch(err){
            console.log(err.message)
        }
    }

    async getAll(){
        try{
            const data=await fs.promises.readFile(this.fileName, 'utf-8')
            return JSON.parse(data)
        }catch(err){
            throw new Error('Error al leer el archivo')
        }
    }

    async deleteByID(id){
        try{
            const data=JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'), 'utf8')
            const toDelete= data.findIndex((product)=> product.id==id)
            if (toDelete===-1)
                console.log('No se encontró el ID')
            else{
                const deleteData= data.splice(toDelete,1)
                await fs.promises.writeFile('./productos.txt', JSON.stringify(data,null,5))
                console.log('Se eliminó el id' +deleteData)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    deleteAll(){
        try{
            const data=fs.readFileSync('./productos.txt', 'utf-8')
            fs.unlinkSync('./productos.txt')
        }catch(err){
            console.log(err.message)
        }
    }

    async getRandom(){
        try{
            const file= await fs.promises.readFile(this.fileName,"utf-8");
            const parsedFile= JSON.parse(file)
            const random=parsedFile[Math.round(Mand.random()*(parsedFile.length-1))]
            return random
        }
        catch(error){
            console.log(error)
        }
    }
}

const contenedor = new Contenedor("productos.txt");

module.exports= Contenedor