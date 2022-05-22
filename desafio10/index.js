import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import 'dotenv/config'

const app= express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './public/views')

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
    if (req.session.user){
        res.render('products')
    }else{
        res.redirect('login')
    }
    res.render ('products')
})

app.get('/login', (req,res) => {
    const {userName} = req.body
    req.session.user = userName
    res.render ('login')
})

app.get('/logout', (req,res)=>{
    const username= req.session.user
    req.session.destroy()
    res.render('logout', {
        username
    })
})

app.post('/login', (req,res) => {
    const {username} = req.body
    req.session.user= username
    res.redirect('/products')
})

app.listen(8080, ()=> {
    console.log(`Server on http://localhost:8080`)
    
});