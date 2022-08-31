const { check} = require ('express-validator')
const {validateResult} = require ('../../helpers/validCartID')

export const validCartID = [
    check('cartID')
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