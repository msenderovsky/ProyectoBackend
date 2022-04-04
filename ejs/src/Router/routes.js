const {Router} = require("express")

const myRoutes = Router()

myRoutes.get('/',(req,res)=>{
    res.render('index')
})

module.exports = myRoutes