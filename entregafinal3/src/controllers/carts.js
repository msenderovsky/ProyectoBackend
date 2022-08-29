require('dotenv').config()
const DAOCarts = require('../daos/'+process.env.ENVIRONMENT+'/DAOCarts')

class cartController{

    async updCartAdd(product){
        const number= document.getElementsByClassName("DDMenu")[0]
        number.addEventListener("click", () => {
            this.addCartProduct(product.id)
        });
    }

    async updCartDel(product){
        const number= document.getElementsByClassName("DDMenu")[0]
        number.addEventListener("click", () => {
            this.deleteCartProduct(product.id)
        });
    }

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
        const cart = await DAOCarts.addCartProduct(id, req.params.idCarrito)
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