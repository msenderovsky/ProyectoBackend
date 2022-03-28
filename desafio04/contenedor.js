const fs = require('fs')

class Contenedor{
    constructor(){
        this.products=[];
        this.id=0;
    }

    save(product){
        try{
            this.id++;
            const newProduct={
                title: product.title,
                price: product.price,
                thumbnail: product.photo,
                id: this.id
            }
            this.products.push(newProduct)
            return newProduct
        }catch(error){
            throw new Error("error al ingresar un nuevo producto")
        }
    }

    getById(productID){
        try{
            return this.products.find(product=>product.id==parseInt(productID))
        }catch(err){
            throw new Error("error al retornar un producto especifico")
        }
    }

    update(productID, product){
        try{
            const tempProducts=[]
            let updatedProd={}
            this.products.forEach(prod=>{
                if (prod.id==productID){
                    updatedProd = {
                        title: product.title,
                        price: product.price,
                        thumbnail: product.photo,
                        id: productID
                    } 
                    tempProducts.push(updatedProd)
                }else{
                    tempProducts.push(prod)
                }
            })
            this.products=tempProducts
            return updatedProd
        }catch(err){
            throw new Error("error al actualizar un producto")
        }
    }

    getAll(){
        try{
            return this.products
        }catch(err){
            throw new Error('Error al mostrar los datos')
        }
    }

    deleteByID(productID){
        try{
            this.products=this.products.filter(prod=> prod.id != productID)
        }catch(err){
            throw new Error('Error al borrar producto por id')
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

module.exports= Contenedor