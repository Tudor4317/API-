import JwtStrategy from "passport-jwt/lib/strategy";
import { ExtractJwt } from "passport-jwt";
import fs from "fs"
import passport from "passport";
import prisma from "lib/prisma.js"
const publicKey = fs.readFileSync("../keys/id_rsa_pub.pem", 'utf-8')
const option = {
jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey: publicKey,
algorithm : ['RS256']
}


const strategy = new JwtStrategy(options, verifyCallback)

verifyCallback = async (payload,done) =>{
try{
    const user =await prisma.UserData.findFirst({
        where : {
            id : payload.sub
        },
    })
    if(!user) {
        return done(null,false)
    }
    return done(null,user)
}

catch(err) {
    return done(err,null)
}

}

passport.use(strategy)

