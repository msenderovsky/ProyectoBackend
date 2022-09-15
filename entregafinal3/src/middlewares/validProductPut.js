import { check } from 'express-validator'
import { validateResult } from '../helpers/validProductPut.js'


export const validProductPut = [ 
    check('name')
        .isString()
        .withMessage('Not a String'),
    check('category')
        .isString()
        .withMessage('Not a String')
    ,
    check('description')
        .isString()
        .withMessage('Not a String'),
    check('image')
        .isString()
        .withMessage('Not a String'),
    check('price')
        .isNumeric()
        .withMessage('Not a Number'),
    check('stock')
        .isNumeric()
        .withMessage('Not a Number'),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]