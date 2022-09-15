import jwt from 'jsonwebtoken'
import {myLoggerError} from '../service/logger.js'

const verifyToken = (req, res, next) => {
    const token2 = req.cookies
    console.log(token2)
    if(!req.cookies.auth) {
        myLoggerError.error("user not logged in ")
    }
    try {
        jwt.verify(req.cookies.auth, process.env.SECRET);
        next();
    } catch (err) {
        myLoggerError.error("Error in verification ")
    }
};

export default verifyToken