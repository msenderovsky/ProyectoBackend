import { Router } from 'express'
import passport from "passport";
const routes = Router()


routes.get('/', (req,res)=>{
    res.send("Welcome")
})

/*routes.get('/products', (req,res) => {
    if (){
        res.render('products')
    }else{
        res.redirect('login')
    }
    res.render ('products')
})*/

routes.get('/login', (req,res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce')
    res.render ('login')
})

routes.get('/login-error', (req,res) => {
    res.render ('login-error')
})

routes.get('/register-error', (req,res) => {
    res.render ('register-error')
})

routes.get('/datos', (req,res)=>{

    console.log('datos req.user: ', req.user)
    console.log('datos req.user: ', req.session.passport.user)

    if (!req.user.counter){
        req.user.counter = 1
    }else{
        req.user.counter++
    }
    const userData={
        name: req.user.name,
        address: req.user.address
    }
    res.render('datos', {datos:userData, counter: req.user.counter})
    
})

routes.get('/logout', (req,res)=>{
    req.session.destroy(err=>{res.redirect('/')})
    res.render('logout', {username})
})

routes.post('/login', passport.authenticate('login', {successRedirect: '/ecommerce/datos', failureRedirect: '/ecommerce/login-error'}))

routes.post('/register', passport.authenticate('register', {successRedirect: '/ecommerce/login', failureRedirect: '/ecommerce/register-error'}))

routes.get('/register', (req,res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce')
    res.render('register')
})

/*routes.post('/register', (req,res) => {
    const {username, password, address} = req.body
    const user= usuariosDB.find(user => user.name == name)
    if (user){
        res.render('register-error')
    }else{
        usuariosDB.push({username, password, address})
        console.log(usuariosDB)
        res.redirect('/login')
    }
})*/


export default routes