const usersSchema = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let instance= null

class AuthController {

    static getInstance(){
        if (!instance){
            instance= new AuthController()
        }
        return instance
    }

    renderLogin(req,res){
        res.render('login')
    }

    renderRegister(req,res){
        res.render('register')
    }
    
    async register(req,res){
       const salt = await bcrypt.genSalt(10)
       const password = await bcrypt.hash(req.body.password, salt)
        
     const user = await  usersSchema.create({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.prefix + "-" + req.body.phone,
            image: req.body.image,
            username: req.body.username,
            password: password
       })
       
        res.json({user})
    }

    async login(req,res){
        const user = await usersSchema.findOne({email: req.body.email})
        if(user){
            const equalsPassword = await bcrypt.compare(req.body.password, user.password)
            console.log(equalsPassword)
            console.log(req.body.password)

            if(equalsPassword) {
                const datos = {
                    name : user.name,
                    age : user.age,
                    address: user.address,
                }
                const token = jwt.sign(datos, 'clave_secreta')
                res.json({
                    datos,
                    token
                })
                res.render('products')
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
                user: req.user
            })
        } catch (error) {
            logger.error('Error en productos: ' + error)
            res.send('Error')
        }
    }
}

module.exports = AuthController