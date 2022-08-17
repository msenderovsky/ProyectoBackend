require('dotenv').config()
const DAOCarts = require('../daos/'+process.env.ENVIRONMENT+'/DAOCarts')

class cartController{

    async showCarts (req, res) {
        const carts = await DAOCarts.showCarts()
        res.send(carts)
    }

    async addCart(req, res){
        const savedCart = await DAOCarts.addCart()
        res.status(201).send(savedCart)
    }

    async findByID(req,res){
        
    }

    async addCartProduct(req, res){
        const id= req.params.id
        const cart = await DAOCarts.addCartProduct(req.params.id, req.params.idCarrito)
        res.send(cart)
    }

    async deleteCartProduct(req, res){
        const cart = await DAOCarts.deleteCartProduct(req.params.idCarrito, req.params.id)
        res.send(cart)
    }

    async deleteCart(req, res){
        const toDelete = await DAOCarts.deleteCart(req.params.id)
        res.send(toDelete)
    }

}

module.exports = new cartController()