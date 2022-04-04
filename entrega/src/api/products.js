const moment = require("moment")
const fs = require('fs').promises
 
class Products {
    constructor(){
        this.productos = [],
        this.ruta = './src/db/productos.json'
    }
 
    getProducts(){
        return this.productos
    }

    getProduct(id){
        const producto = this.productos.find(prod => prod.id == id)
        return producto
    }

    async saveProduct(data){
        //id, timestamp, nombre, descripcion, código, foto (url), precio, stock.
        const dataFs = await fs.readFile(this.ruta,'utf-8')
        let nuevoId = 1 ;
        if (dataFs) {
            const dataProductos = JSON.parse(dataFs)
            nuevoId = (dataProductos[(dataProductos.length)-1].id)+1
        }
        const newProduct = {
            id: nuevoId,
            timestamp: moment().format('L LTS'),
            nombre : data.nombre,
            descripcion: data.descripcion,
            codigo: data.codigo,
            foto: data.foto,
            precio : data.precio,
            stock: data.stock
        }
        this.productos.push(newProduct)
        console.log(this.productos)
        await fs.writeFile(this.ruta,JSON.stringify(this.productos, null, 2))
        return newProduct
    }

    async updateProduct(id, product) {
        try {
            const arr= await this.getAll();
            const productById = arr.find((prod) => prod.id === parseInt(id));
            if (productById) {
                const updProduct = {
                    id: id, 
                    timestamp: moment().format('L LTS'),
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    codigo: product.codigo,
                    foto: product.foto,
                    precio: product.precio,
                    stock: product.stock
                }
                const findIndex = arr.findIndex((prod) => prod.id === parseInt(id))
                arr[findIndex] = updProduct
                await fs.writeFile(this.filePath, JSON.stringify(ar, null, 2));
                return updProduct
            } else {
                console.log(`No se encontro el producto con id: ${id}`);
            }
        } catch (error) {
            console.log("Error " + error);
        }
    }
}
 
module.exports = Products
