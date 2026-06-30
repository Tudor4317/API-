import JwtStrategy from "passport-jwt/lib/strategy";
import { ExtractJwt } from "passport-jwt";
import fs from "fs"
import passport from "passport";
import prisma from "../lib/prisma.js"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const publicKey = fs.readFileSync(__dirname, '.', 'keys', 'id_rsa_pub.pem')
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

