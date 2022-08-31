const { check} = require ('express-validator')
const {validateResult} = require ('../../helpers/validProductPost')

 export const validProductPost = [ 
    check('name')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('Empty field'),
    check('category')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('Empty field'),
    check('description')
        .exists()
        .isString()
        .withMessage('Not a string')
        .not()
        .isEmpty()
        .withMessage('Empty field')
        , 
    check('image')
        .exists()
        .isString()
        .withMessage('Not a string')
        .not()
        .isEmpty()
        .withMessage('Empty field'),
    check('price')
        .exists()
        .isNumeric()
        .withMessage('Not a number')
        .not()
        .isEmpty()
        .withMessage('Empty field')
        ,
    check('stock')
        .exists()
        .isNumeric()
        .withMessage('Not a number')
        .not()
        .isEmpty()
        .withMessage('Empty field'),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]