import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'
import passport from 'passport'
import {Strategy} from 'passport-local'
import mongoose from 'mongoose'
import 'dotenv/config'
import routes from './src/routes/routes.js'

const LocalStrategy= Strategy;
const app= express()
const PORT= process.env.PORT

passport.use(new LocalStrategy(
    function(username, password, done) {
        const user= usuariosDB.find(user => user.name== user)
        if (!user){
            console.log('Usuario no existe')
            return done(null,false)
        } else{
            if (user.password != password){
                console.log('Credenciales incorrectas')
                return done(null,false)
            }else{
                return done(null, user)
            }
        }
    }
  ));

passport.serializeUser((user,done)=>{
    done(null,user.name)
})

passport.deserializeUser((name,done)=>{
    const user= usuariosDB.find(user => user.name== name)
    done(null,user)
})

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