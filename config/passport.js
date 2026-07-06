import JwtStrategy from "passport-jwt/lib/strategy.js";
import { ExtractJwt } from "passport-jwt";
import fs from "fs"
import passport from "passport";
import prisma from "../lib/prisma.js"
import { dirname } from "path"
import { fileURLToPath } from "url"
import path from "path";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)




const publicKey = fs.readFileSync(
    path.join(__dirname, "../keys/id_rsa_pub.pem")
);
const options = {
jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey: publicKey,
algorithms : ['RS256']
}


const verifyCallback = async (payload,done) =>{
try{
    const user =await prisma.UserData.findFirst({
        where : {
            userId : payload.sub
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

const strategy = new JwtStrategy(options, verifyCallback)


passport.use(strategy)




