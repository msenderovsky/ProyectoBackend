const cartService = require ('../service/cartService')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')

class cartController{

    async showCartProducts(req,res){
        
        console.log("CARRITO ACA ABAJO")
        const cart= await cartService.findByID(req.body)
        const arr= await cartService.showCartProducts(cart.email)
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

    async addCart(req, res){
        try{
            const savedCart = await cartService.addCart()
            res.status(201).send(savedCart)  
        }catch(error){
            myLoggerError.error("Error in addCart " + error)
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

    async addCartProduct(req, res){
        const {cartID, productID, cant} = req.params
        try {
            const cart = await cartService.addProdToCart(cartID, productID, cant)
            res.status(201).send(cart) 
        } catch (error) {
            myLoggerError.error("Error in addCartProduct " + error) 
        }
    }

    async deleteCartProduct(req, res){
        try{
            const {idCart, idProduct} = req.params
            const cart = await cartService.deleteCartProduct(cartID, productID)
            res.send(cart)
        }catch(error){
            myLoggerError.error("Error in deleteCartProduct " + error)
        }
    }

    async deleteCart(req, res){
        try{
            const id =  req.params.cartID
            const cart =  await cartServices.deleteCart(id)
            res.send(cart)
        }catch(error){
            myLoggerError.error("Error in deleteCart " + error)
        } 
    }

    async updateCartProduct(cartID, productID, cant){
        const {cartID, productID, cant} = req.params
        try {
            const cart = await cartServices.updateCartProduct(cartID, productID, CanvasPattern)
            return cart
        } catch (error) {
            myLoggerError.error("Error in deleteCartProduct " + error)
        }
    }
}

module.exports = new cartController()