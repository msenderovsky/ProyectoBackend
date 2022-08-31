const userModel = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userService = require ('../service/UserService')
const sendMailUser = require ('../utils/nodemailerUser')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')

module.exports = class authController {

    async register(req, res) {
        try {
            const password = req.body.password;
            const passwordVerification = req.body.passwordVerification;
            if (password !== passwordVerification) {
                myLoggerError.error("Error in register " + error)
                return
            }
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            const userExist = await userModel.exists({ email: req.body.email });
            if (userExist) {
                myLoggerError.error("Error in register " + error)
                return      
            } 
            const user = await userService.save(req.body, passwordHash)
            const data = {
                name: user.name,
                password: user.password,
            };
            const token = jwt.sign(data, process.env.SECRET);
            const  tokenAge = (24 * 60 * 60) // 1 dia
            await sendMailUser(user)
            res.cookie("token", token, { maxAge: tokenAge })
            res.send(token)
        } catch (error) {
            res.send(error);
        }
    }

    async login(req, res) {
        const user = await userModel.findOne({ email: req.body.email });
        if(!user){
            myLoggerError.error("Error in login: user not found " + error)
            return
        }
        const pw = await bcrypt.compare(req.body.password,user.password)

        if(!pw){
            myLoggerError.error("Error in login: wrong credentials" + error)
            return
        }
        const data = {
            email: user.email,
            name: user.name,
        };
        const  tokenAge = ( 24 * 60 * 60) // 1 dia
        const token = jwt.sign(data, process.env.SECRET);
        res.cookie("token", token, { maxAge: tokenAge })
        res.cookie("email", data.email , { maxAge: tokenAge })
        res.send(token)
        // res.render('products')
    }
}
