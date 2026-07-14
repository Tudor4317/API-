import jwt from "jsonwebtoken"
import passport from "passport";
import prisma from "../lib/prisma.js"
import { dirname } from "path"
import { fileURLToPath } from "url"
import path from "path";
import { verify } from "crypto";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import fs from "fs"




const publicKey = fs.readFileSync(
    path.join(__dirname, "../keys/accessTokenKeys/id_rsa_pub.pem")
);


const verfiyMiddleware = (req,res,next) =>{
const authHeader = req.headers.authorization

if(!authHeader){
    res.status(401).send("Not logged in !")
}
const token = authHeader.split(' ')[1]

jwt.verify(token,publicKey,  (err,decoded) =>{
    
    if(err){
        return res.status(403).send(err)
    }
    req.user = {userId : decoded.sub}
    next()


})}


export default verfiyMiddleware