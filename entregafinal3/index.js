const mongoose = require('mongoose');
const app = require('./app/app')
const sendMail = require('./app/config/nodemailer');
const sendSMS = require('./app/config/twilioSms');
const session = require('express-session')
require('dotenv').config()


const PORT = process.env.PORT
const urlBase = process.env.DB

if (process.env.ENVIRONMENT == 'mongo') mongoose.connect(urlBase)


app.use(session({
    secret: 'keyboard cat',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: Number(process.env.TIME_SESSION_SECONDS)
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

sendMail()
//sendSMS()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
