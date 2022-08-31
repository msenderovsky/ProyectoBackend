const userModel = require('../models/users')
const productsSchema = require('../models/products')
const cartsSchema = require('../models/carts')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const DAOUsers = require('../daos/DAOUsers')
const password = ""

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
        password = await bcrypt.hash(req.body.password, salt)
        const user = await  userModel.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.prefix + "-" + req.body.phone,
            password: password
        })
        const isEmailExist = await userModel.findOne({ email: req.body.email });
        if (isEmailExist) {
            return res.status(400).json({error: 'Email ya registrado'}) 
        } else {
            DAOUsers.addOUser(user)
            res.render('both')
        }
    }

    async login(req,res){
        console.log("testing")
        const user = await userModel.findOne({email: req.body.email})
        if(user){
            const equalsPassword = await bcrypt.compare(req.body.password, user.password)
            if(equalsPassword) {
                const datos = {
                    name : user.name,
                    email: user.email,
                    phone: user.phone
                }
                const token = jwt.sign(datos, 'clave_secreta')
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

    async authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const secret= jwt.decode(password)
        if (token == null) return res.sendStatus(401)
        jwt.verify(token, secret, (err, user) => {
            console.log(err)
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    }
}

module.exports = new AuthController()