import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import mongoose from 'mongoose'
import routes from './src/routes/routes.js'
import 'dotenv/config'
import { LoginStrategy, SignUpStrategy } from './src/middlewares/localPassport.js'
import cluster from 'cluster'
import os from 'os'
import minimist from 'minimist'
import compression from 'compression'
import { logger, myLoggerWarn, myLoggerError } from './src/utils/logger.js'

const CPUAmount = os.cpus().length;
const app= express()
const args = minimist(process.argv.slice(2))
const serverMode = args.modo || 'Fork'
const PORT = args.puerto || 8080
//const logError= log4js.getLogger("errorFile")

passport.use('login', LoginStrategy);
passport.use('signup', SignUpStrategy)

app.use(compression())
//app.use(myLoggerWarn)
//app.use(myLoggerInfo)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//app.use(express.static('public'))
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

app.use((req, res) => {
    logger.warn('La ruta no existe')
    myLoggerWarn.warn('La ruta que quiere accede no existe')
    res.send('La ruta no existe')
})

app.get("*", (req,res)=>{
    res.send("page not found")
})

if (serverMode == 'CLUSTER') {
    if(cluster.isPrimary){
        console.log(`Master ${process.pid} is running`)
        for (let i = 0; i < CPUAmount; i++) {
            cluster.fork();
        }
    
        cluster.on('exit', (worker,code,signal)=>{
            console.log(`Worker ${worker.process.pid} died`)
        })
    } else {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}/ecommerce/`))
       console.log(`Worker ${process.pid} started`)
    }
} else {
    logger.info('modo FORK.')
    app
        .listen(PORT, () => logger.info(`http://localhost:${PORT}/ecommerce/`))
        .on('error', err => () => {
            logger.error(err)
            myLoggerError.error(err)
        })
}