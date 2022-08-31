/*const jwt = require  ('jsonwebtoken')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')*/


import jwt from 'jsonwebtoken'
import { validateResult } from '../helpers/validCartID.js'

const verifyToken = (req, res, next) => {
    const token = req.get('Authorization')
    if (!token) {
        myLoggerError.error("user not logged in " + error)
        return
    }
    try {
       jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        myLoggerError.error("Error in verification " + error)
    }
};

export default verifyToken