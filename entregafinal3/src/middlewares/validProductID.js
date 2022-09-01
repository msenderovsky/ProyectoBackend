/*const { check} = require ('express-validator')
const {validateResult} = require ('../helpers/validProductID')*/


import { check} from 'express-validator'
import { validateResult } from '../helpers/validProductID.js'

export const validProductID = [
    check('_id')
    .exists()
    .withMessage('You have to add a request Product id ')
    .isString()
    .withMessage('Must be an String'),
    (req,res,next) => {
        validateResult(req,res,next)
    } 
]