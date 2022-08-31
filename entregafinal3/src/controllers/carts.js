require('dotenv').config()
//const { render } = require('../app');
const DAOCarts = require('../daos/DAOCarts')

class cartController{

    async showCartProducts(req,res){
        
        console.log("CARRITO ACA ABAJO")
        const cart= await DAOCarts.findByID(req.body)
        const arr= await DAOCarts.showCartProducts(cart.email)
        res.render('cart', {arr})
    }

    async showCarts (req, res) {
        const carts = await DAOCarts.showCarts()
        res.send(carts)
    }

    async addCart(req, res){
        const savedCart = await DAOCarts.addCart(req.body.id)
        res.status(201).send(savedCart)
    }

    async findByID(id){
        const carts = await DAOCarts.findByID(id)
        res.send(carts)
    }

    async addCartProduct(req, res){
        const cart= await DAOCarts.findByID(req.body.email)
        if (cart==null){
            console.log("carrito vacio")
            cart=addCart(req.body.email)
        }
        console.log("carrito creado")
        const id= req.params.id
        cart = await DAOCarts.addCartProduct(id, req.body.email)
        res.send(cart)
    }

    async deleteCartProduct(req, res){
        const cart= await DAOCarts.findByID(req.body.email)
        if (cart==null)
            cart=addCart(req.body.email)
        const id= req.params.id
        cart = await DAOCarts.deleteCartProduct(id, req.body.email)
        res.send(cart)
    }

    async deleteCart(req, res){
        const toDelete = await DAOCarts.deleteCart(req.params.id)
        res.send(toDelete)
    }

}

module.exports = new cartController()