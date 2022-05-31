import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'
import 'dotenv/config'

const app= express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './public/views')

app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO
    }),
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

app.get('/products', (req,res) => {
    if (true){
        res.render('products')
    }else{
        res.redirect('login')
    }
    res.render ('products')
})

app.get('/login', (req,res) => {
    res.redirect ('login')
})

app.get('/login-error', (req,res) => {
    res.render ('login-error')
})

app.get('/datos', (req,res)=>{
    if (req.session.name){
        req.session.counter++
        const user= userDB.find(user => user.name== req.session.name)
        res.render('datos', {datos:user, counter: req.session.counter})
    } else {
        res.redirect('/login')
    }
})

app.get('/logout', (req,res)=>{
    req.session.destroy(err=>{res.redirect('/')})
    res.render('logout', {
        username
    })
})

app.post('/login', (req,res) => {
    const {username, password} = req.body
    const user= userDB.find(user => user.name== name)
    if (!user){
        console.log('Usuario no existe')
        res.redirect('/login-error')
    } else{
        if (user.password != password){
            console.log('Credenciales incorrectas')
            res.redirect('login-error')
        }else{
            req.session.name=name;
            req.session.counter=0;
            res.redirect('/datos')
        }
    }
})

app.get('/register', (req,res) => {
    res.render('register')
})

app.post('/register', (req,res) => {
    const {username, password, address} = req.body
    const user= userDB.find(user => user.name == name)
    if (user){
        res.render('register-error')
    }else{
        userDB.push({username, password, address})
        console.log(userDB)
        res.redirect('/login')
    }
})


app.listen(8080, ()=> {
    console.log(`Server on http://localhost:8080`)
    
});