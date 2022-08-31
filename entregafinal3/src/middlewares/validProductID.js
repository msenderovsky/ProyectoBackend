/*const { check} = require ('express-validator')
const {validateResult} = require ('../helpers/validProductID')*/


import { check} from 'express-validator'
import { validateResult } from '../helpers/validProductID.js'

export const validProductID = [
    check('idProduct')
    .exists()
    .withMessage('You have tu add an request Product id ')
    .isString()
    .withMessage('Must be an String')
    .isLength({min:24, max:24})
    .withMessage('must be 24 chars'),
    (req,res,next) => {
        validateResult(req,res,next)
    } 
]