
import fs from "fs"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"
import jwt from "jsonwebtoken"
import issueToken from "../lib/issueToken.js"
import prisma from "../lib/prisma.js"


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const refreshTokenkeypath = path.join(__dirname, '..', 'keys', 'accessTokenKeys', 'id_rsa_pub.pem')
const accessTokenpublicKey = fs.readFileSync(refreshTokenkeypath)

export default async function refreshTokenController(res,req){
    
    try{


const refreshToken = req.cookies.jwt
if(!refreshToken){
    res.status(401).send("You are not logged in !")
}

const userVerify = await prisma.userData.findFirst({
    where :{
        refreshtoken : refreshToken
    },
    select :{
        userId : true
    }
})

if(!userVerify){
    res.status(403).send("User not found !")
}

jwt.verify(refreshToken,accessTokenpublicKey,(err,decoded) =>{
    if(err || decoded.userId !== userVerify.userId ){
        return res.status(403).send("Unauthorized")
    }

const token = issueToken(userVerify)
res.json({accessToken : token})

})


}

catch(err){

}
}