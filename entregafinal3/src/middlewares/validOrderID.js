/*const { check} = require ('express-validator')
const {validateResult} = require ('../helpers/validOrderID')*/


import { check} from 'express-validator'
//import { validateResult } from '../helpers/validOrderID'

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