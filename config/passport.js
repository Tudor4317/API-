import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import { verifyHash } from "../lib/passwordHashing.js";
import { pullData } from "../lib/methods.js";
import { verifyUser } from "../lib/methods.js";


const verifyCallback = async (username,password,done) =>{
try{
    const user = await pullData(username)

    if(!user){
        return done(null,false,{msg: 'No user found !'})
    }

const verifyPassword = await verifyHash(password,user.password)

if(!verifyPassword){
    return done(null,false,{msg:'Wrong password'})


}

return done(null,user )

}

catch(err){

    return done(err)

}
}

passport.serializeUser((user,done) =>{
    return done(null,{
        id: user.userId
})
})

passport.deserializeUser(async (user,done) =>{
try{
    const userObject = await verifyUser(user.userId)
    return done(null,userObject)
    
}

catch(err){
    done(err)
}
})

passport.use(new LocalStrategy(verifyCallback))





