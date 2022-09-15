import { validationResult } from "express-validator/src/validation-result.js";
import {myLoggerError} from '../service/logger.js'

export const validateResult = (req,res,next)=> {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        myLoggerError.error("Error in validProductPost " + error)
        res.status(403)
        res.send({errors: error.array()})
    }
}