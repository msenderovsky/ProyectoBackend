require('dotenv').config()
//const { render } = require('../app');
const DAOCarts = require('../daos/DAOCarts')

class cartController{

    async showCartProducts(req,res){
        
        console.log("CARRITO ACA ABAJO")
        
        //console.log(cartArr)
        res.render('cart' )
    }

    async updCartAdd(product, cart){
        cart.addCartProduct(product.id)
        console.log("------------------")
        console.log(cart)
    }

    async updCartDel(product, cart){
            cart.deleteCartProduct(product.id)
            console.log("------------------")
            console.log(cart)
    }

    async showCarts (req, res) {
        const carts = await DAOCarts.showCarts()
        res.send(carts)
    }

    async addCart(req, res){
        const savedCart = await DAOCarts.addCart()
        res.status(201).send(savedCart)
    }

    async findByID(id){
        const carts = await DAOCarts.findByID(id)
        res.send(carts)
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