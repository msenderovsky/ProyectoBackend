import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import mongoose from 'mongoose'
import routes from './src/routes/routes.js'
import 'dotenv/config'
import { LoginStrategy, RegisterStrategy } from './src/middlewares/localPassport.js'

const app= express()
const PORT= process.env.PORT

passport.use('login', LoginStrategy);
passport.use('register', RegisterStrategy)

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO
    }),
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly:false,
        secure:false,
        maxAge: Number(process.env.TIME_SESSION_SENCONDS)*1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/ecommerce', routes)

mongoose.connect(process.env.MONGO);

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}/ecommerce/`)
    
});