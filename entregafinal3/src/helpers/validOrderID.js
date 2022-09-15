import { validationResult } from "express-validator/src/validation-result.js";
import {myLoggerError} from '../service/logger.js'

export const validateResult = (req,res,next) => {
    try {
        validationResult(req).throw()
        return next()        
    } catch (error) {
        myLoggerError.error("Error in validOrderID " + error)
        res.status(404)
        res.send({errors: error.array()})
    }
}