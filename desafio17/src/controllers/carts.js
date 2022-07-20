require('dotenv').config()
const DAOCarts = require('../daos/'+process.env.ENVIRONMENT+'/DAOCarts')
let instance= null

class FBaseCarts{
    constructor(){
        this.DAOCarts= require('../daos/firebase/DAOProducts')
    }
}

class FSCarts{
    constructor(){
        this.DAOCarts= require('../daos/fs/DAOProducts')
    }
}

class MongoCarts{
    constructor(){
        this.DAOCarts= require('../daos/mongo/DAOProducts')
    }
}

class CartFactory{
    create(DAOCarts){
        switch(DAOCarts){
            case "firebase":
                return new FBaseCarts()
            case "fs":
                return new FSCarts()
            case "mongo":
                return new MongoCarts()
        }
    }
}

const carts= new CartFactory()

class cartController{

    static getInstance(){
        if (!instance){
            instance= new cartController()
        }
        return instance
    }

    async showCarts (req, res) {
        const carts = await carts.showCarts()
        res.send(carts)
    }

    async addCart(req, res){
        const savedCart = await carts.addCart()
        res.status(201).send(savedCart)
    }

    async addCartProduct(req, res){
        const cart = await carts.addCartProduct(req.params.id, req.params.idCarrito)
        res.send(cart)
    }

    async deleteCartProduct(req, res){
        const cart = await carts.deleteCartProduct(req.params.idCarrito, req.params.id)
        res.send(cart)
    }

    async deleteCart(req, res){
        const toDelete = await carts.deleteCart(req.params.id)
        res.send(toDelete)
    }

}

module.exports = new cartController()