const { validationResult } = require ("express-validator/src/validation-result.js")
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')

export const validateResult = (req,res,next) => {
    try {
        validationResult(req).throw()
        return next()        
    } catch (error) {
        myLoggerError.error("Error in validCartID " + error)
        res.status(404)
        res.send({errors: error.array()})
    }
}