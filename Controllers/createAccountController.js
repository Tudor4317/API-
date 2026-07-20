import { createUser } from "../lib/methods.js"
import { hashPassword } from "../lib/passwordHashing.js"
import prisma from "../lib/prisma.js"
import issueToken from "../lib/issueToken.js"


export async function createAccountController(req,res,next){
    try{      
    const {username,password,email} = req.body
    const {hash,salt} = await hashPassword(password)
    const userObject = await createUser(username,email,hash)
    const token = issueToken(userObject)
  
    await prisma.userData.update({
        where :{
            username : userObject.username
        },
        data :{
            refreshtoken : token["refreshToken"].split(" ")[1]
        }
    })
        res.cookie("jwt",token.refreshToken,{httpOnly: true, sameSite:'lax', maxAge: 15 * 24 * 60 * 60 * 1000})

    res.json({accessToken : token.accessToken})



}

catch(err){
  
     res.status(500).json({message : "Email already in use"})
}}





