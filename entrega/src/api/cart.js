const fs= require ('fs').promises
const moment= require ('moment')

class cart{
    constructor(){
        this.route='./db/cart.txt'
        this.cart=[]
        this.id=1
    }

    async createCart(){
        try{
            const cartList= await fs.readFile(this.route)
            //if (cartList.toString()!='')
        }catch{

        }
    } 

    async deleteCart(){
        try{
            const loadedCart= await this.getAllCart()
            const delete1= loadedCart.findIndex((cart)=> cart.id===parseInt(idCart))

        }catch{
            
        }

    }

    async deleteProductInCart(idCart, idProduct){

    }

    async listProductsInCart(idCart){

    }
}