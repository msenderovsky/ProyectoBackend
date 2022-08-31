const { check} = require ('express-validator')
const {validateResult} = require ('../../helpers/validProductPut')

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