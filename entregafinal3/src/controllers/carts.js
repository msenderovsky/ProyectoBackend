const cartService = require ('../service/cartService')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')

module.exports = class cartController{

    async showCartProducts(req,res){
        
        const cart= await cartService.findByID(req.params.id)
        const arr= await cartService.showCartProducts(cart)
        res.render('cart', {arr})
    }

    async showCarts (req, res) {
        try{
            const carts = await cartService.showCarts()
            res.send(carts)
        }catch(error){
            myLoggerError.error("Error in showCarts " + error)
        }
    }  

    async showCart(req,res){
        try{
            const id = req.params.cartID
            const cart = await cartService.showCart(id)
            res.send(cart)
        }catch(error){
            myLoggerError.error("Error in showCart " + error)
        }
    }

    async addCart(req, res){
        try{
            const newCart = await cartService.addCart()
            res.status(201).send(newCart)  
        }catch(error){
            myLoggerError.error("Error in addCart " + error)
        }
    }

    async addCartProduct(req, res){
        const {cartID, productID, cant} = req.params
        try {
            const cart = await cartService.addCartProduct(cartID, productID, cant)
            res.status(201).send(cart) 
        } catch (error) {
            myLoggerError.error("Error in addCartProduct " + error) 
        }
    }

    async deleteCartProduct(req, res){
        try{
            const {cartID, productID} = req.params
            const cart = await cartService.deleteCartProduct(cartID, productID)
            res.send(cart)
        }catch(error){
            myLoggerError.error("Error in deleteCartProduct " + error)
        }
    }

    async deleteCart(req, res){
        try{
            const id =  req.params.cartID
            const cart =  await cartService.deleteCart(id)
            res.send(cart)
        }catch(error){
            myLoggerError.error("Error in deleteCart " + error)
        } 
    }

    async updateCartProduct(cartID, productID, cant){
        const {cartID, productID, cant} = req.params
        try {
            const cart = await cartService.updateCartProduct(cartID, productID, cant)
            return cart
        } catch (error) {
            myLoggerError.error("Error in updateCartProduct " + error)
        }
    }
}