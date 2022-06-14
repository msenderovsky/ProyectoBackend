import { Router } from 'express'
import passport from "passport";
const routes = Router()


routes.get('/', (req,res)=>{
    res.send("Welcome")
})

routes.get('/login', (req,res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce/datos')
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
        username: req.user.username,
        address: req.user.address
    }
    res.render('datos', {datos:userData, counter: req.user.counter})
    
})

routes.get('/logout', (req,res)=>{
    const nombre = req.user.username
    req.session.destroy(err=>{res.render('logout', {nombre: nombre}) })
})

routes.post('/login', passport.authenticate('login', {successRedirect: '/ecommerce/datos', failureRedirect: '/ecommerce/login-error'}))

routes.post('/register', passport.authenticate('signup', {successRedirect: '/ecommerce/login', failureRedirect: '/ecommerce/register-error'}))

routes.get('/register', (req,res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce')
    res.render('register')
})

routes.get('/api/random', (req, res) => {
    let cant = req.query.cant || 1000000;
    let passCant = ['' + cant + '']
    const child = fork('./random.js');
    child.send(passCant);
    child.on('message', (operation) => {
    res.send(JSON.stringify(operation));
  });
})

routes.get('/info', (req,res)=> {
    //res.render('info', {data : objInfo})
    res.json(objInfo)
})


export default routes