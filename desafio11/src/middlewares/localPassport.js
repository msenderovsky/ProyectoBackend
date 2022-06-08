import { createHash, isValidPassword } from "../utils/validate.js"
import { Strategy } from "passport-local";
import { User } from "../models/user.js"
import passport from 'passport'

passport.serializeUser((user,done)=>{
    done(null,user._id)
})

passport.deserializeUser((id,done)=>
    User.findById(id, done)
)

export const LoginStrategy =new Strategy(
    function(username, password, done) {
        User.findOne({username},(err,user) =>{
            if (err) return done(err);
            if (!user){
                console.log('Usuario no existe')
                return done(null,false)
            }
            if (!isValidPassword(user, password)) return done(null, false);
                return done(null, user)
            })
    }
)

export const SignUpStrategy= new Strategy({
    passReqToCallback: true
},
    (req, username, password, done) => {
        console.log(username)
        const findUser = User.findOne({ username: username }, function (err, user) {
            if (findUser!=null)
                console.log("yes")
            else console.log("no")
            //console.log(findUser)
            if (err) return done(err)
            if (user) return done(null, false)

            const newUser = {
                address: req.body.address,
                username: req.body.username,
                password: createHash(password),
            }

            console.log("paso el creador de newuser fallo3")
            User.create(newUser, (err, IDUser) => {
                if (err) return done(err);
                return done(null, IDUser);
            });
        });
    }
)