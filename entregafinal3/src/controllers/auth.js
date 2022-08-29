const userModel = require('../models/users')
const productsSchema = require('../models/products')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {
    constructor(){

    }
    renderLogin(req,res){
        res.render('products')
    }
    renderRegister(req,res){
        res.render('both')
    }
    renderBoth(req,res){
        res.render('both')
    }

    async register(req,res){
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        
        const user = await  userModel.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.prefix + "-" + req.body.phone,
            password: password
        })
        
        res.render('both')
    }

    async login(req,res){
        console.log("testing")
        const user = await userModel.findOne({email: req.body.email})
        console.log(user)
        if(user){
            const equalsPassword = await bcrypt.compare(req.body.password, user.password)
            console.log(equalsPassword)
            console.log(req.body.password)

            if(equalsPassword) {
                const datos = {
                    name : user.name,
                    email: user.email,
                    phone: user.phone
                }
                const token = jwt.sign(datos, 'clave_secreta')
                /*res.json({
                    datos, 
                    token
                })*/
                //res.redirect('/products',{datos, token})
                const arr= await productsSchema.find()
                const arr2=[datos, token, arr]
                console.log(arr)
                res.render('products', {arr2})
            } else {
                res.send('Reescriba sus datos ')
            }
                
        }else {
            res.send('Los campos no coinciden')
        }
    }

    async products (req, res) {
        
        try { 
            
            logger.info('Se accedió a productos')
            res.render('products', {
                user: req.user, products
            })
        } catch (error) {
            logger.error('Error en productos: ' + error)
            res.send('Error')
        }
    }
}

module.exports = new AuthController()