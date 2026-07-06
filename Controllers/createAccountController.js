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

    
    res.cookie("token",authToken,{
        httpOnly : true,
        secure : false,
        sameSite : "lax",
        maxAge : 14 * 24 * 60 * 60 * 1000
    } )

    res.json({ message : "Successfully registered"})

}

catch(err){
    console.error(err)
     res.status(500).json(`Something went wrong ! Here is the error : ${err}`)
}}





