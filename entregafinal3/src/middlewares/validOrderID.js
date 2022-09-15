import { check } from 'express-validator'

export const validOrderID = [
    check('orderID')
    .exists()
    .withMessage(' ')
    .isString()
    .withMessage('Not a String')
    .isLength({min:24, max:24})
    .withMessage('Under or over 24 chars'),
    (req,res,next) => {
        validateResult(req,res,next)
    } 
]