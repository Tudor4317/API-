import { createUser } from "../lib/methods.js"
import { hashPassword } from "../lib/passwordHashing.js"
import prisma from "../lib/prisma.js"
import issueToken from "../lib/issueToken.js"


export async function createAccountController(req,res,next){
    try{      
    const {username,password,email} = req.body
    const {hash,salt} = await hashPassword(password)
    const userObject = await createUser(username,email,hash,salt)
    const authToken = issueToken(userObject)
    await prisma.userData.update({
        where :{
            userId : userObject.userId
        },
        data :{
            refreshtoken : authToken.refreshtoken
        }
    })
    
    res.cookie("jwt",authToken.refreshToken,{httpOnly: true, maxAge: 15 * 24 * 60 * 60 * 1000})
    res.json({accessToken : authToken.accessToken})



}

catch(err){
    console.error(err)
     res.status(500).json(`Something went wrong ! Here is the error : ${err}`)
}}





