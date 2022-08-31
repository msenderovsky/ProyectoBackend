/*const { check} = require ('express-validator')
const {validateResult} = require ('../helpers/validOrderPost')*/


import { check} from 'express-validator'
import { validateResult } from '../helpers/validOrderPost.js'


export const validOrderPost = [ 
    check('email')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('Empty field'),
    check('address')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('Empty field'),
    ,
    (req,res,next) => {
        validateResult(req,res,next)
    }
]