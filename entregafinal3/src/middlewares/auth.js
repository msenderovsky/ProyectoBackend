/*const jwt = require  ('jsonwebtoken')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')*/


import jwt from 'jsonwebtoken'
import { validateResult } from '../helpers/validCartID.js'
import {myLoggerError} from '../service/logger.js'

const verifyToken = (req, res, next) => {
    const token2 = req.cookies
    console.log(token2)
    if(!req.cookies.auth) {
        myLoggerError.error("user not logged in ")
    }
    /*console.log('decoded', decoded)
    if(decoded) 
        req.user = decoded.user   
    console.log(token2)*/
    //console.log(req.get('Authorization'))
    //const token = req.get('Authorization')
    /*if (!token) {
        myLoggerError.error("user not logged in ")
        return
    }*/
    try {
        jwt.verify(req.cookies.auth, process.env.SECRET);
        next();
    } catch (err) {
        myLoggerError.error("Error in verification ")
    }
};

export default verifyToken