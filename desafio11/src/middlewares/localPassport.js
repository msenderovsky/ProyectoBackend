import { createHash } from "../utils/validate.js"
import { Strategy } from "passport-local";
import { User } from "../models/user.js"
import passport from 'passport'

passport.serializeUser((user,done)=>{
    done(null,user._id)
})

passport.deserializeUser((id,done)=>
    User.findbyID(id, done)
)

export const LoginStrategy =new Strategy(
    function(username, password, done) {
        User.findOne({username},(err,user) =>{
            if (err) return done(err);
            if (!user){
                console.log('Usuario no existe')
                return done(null,false)
            }
            if (user.password != password){
                console.log('Credenciales incorrectas')
                return done(null,false)
            }else{
                return done(null, user)
            }
        })
    }
);

export const Registertrategy= new Strategy({
    passReqToCallback: true
},
    (req, username, password, done) => {
        User.findOne({ 'username': username }, function (err, user) {

            if (err) return done(err)
            if (user) return done(null, false)

            const newUser = {
                name: req.body.name,
                username: req.body.username,
                password: createHash(password),
            }

            User.create(newUser, (err, userWithId) => {
                if (err) return done(err);
                return done(null, userWithId);
            });
        });
    }
)