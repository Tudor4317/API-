
import fs from "fs"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"
import jwt from "jsonwebtoken"
import issueToken from "../lib/issueToken.js"
import prisma from "../lib/prisma.js"


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const refreshTokenpublicKey = fs.readFileSync(path.join(__dirname, '..', 'keys', 'refreshTokenKeys', 'id_rsa_pub.pem'))

export default async function refreshTokenController(req,res){
    
    try{
const token = req.cookies.jwt
console.log(token)

if(!token){
    return res.status(401).json({"message" : "You are not logged in !"})
}

const refreshToken = token.split(" ")[1]

const userVerify = await prisma.userData.findFirst({
    where :{
        refreshtoken : refreshToken
    },
    select :{
        userId : true
    }
})

console.log(userVerify)


if(!userVerify){
    return res.status(403).json({"message": "not signed up"})
}

jwt.verify(refreshToken,refreshTokenpublicKey,{algorithms : ["RS256"]},(err,decoded) =>{

    if(err || decoded.sub !== userVerify.userId ){

    
        
        return res.status(403).json({"message" : "No user found !"})
    }

const token = issueToken(userVerify)
res.json({accessToken : "Bearer " + token.accessToken})

})


}

catch(err){
    console.log(err)
return res.status(403).json(err)
}
}