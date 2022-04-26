const Cart= require ('../models/cart')

class CartController{
    async addCart (req, res) {
        const cart= new Cart({
            date: Date().toString()
        })
        const savedCart = await cart.save()
        res.send(savedCart)
    }

    async addProduct(req, res){
        try{
            const cart= await Cart.findOne({_id:req.params.cartID})
            cart.products.push(req.params.id)
            await cart.save()
            res.send(cart)
        } catch (error) {
            console.log("Error agregando un producto al carro" + error);
        }
    }

    async getCarts(req,res){
        const cart= await Cart.find().populate('products')
        res.send(cart)
    }

    async deleteCartProduct(req, res){
        try{
            const cart= await Cart.findOne({_id: req.params.cartID})
            cart.products= cart.products.filter(prod => prod != req.params.id)
            await cart.save()
            res.send(cart)
        } catch (error) {
            console.log("Error agregando un producto al carro" + error);
        }
    }

    async deleteCart(req, res){
        try{
            const id= req.params.id
            const toDelete = await Cart.deleteOne({_id: id})
            res.send(toDelete)
        }catch(error){
            console.log(`Error borrando por id: ${error.message}`)
        }
    }

    async getCart(req,res){
        const cart = await Cart.findOne({_id: req.params.id})
        res.send(cart)
    }
}

module.exports= new CartController()