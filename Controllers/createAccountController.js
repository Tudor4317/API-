import { createUser } from "../lib/methods.js"
import { hashPassword } from "../lib/passwordHashing.js"
import prisma from "../lib/prisma.js"



export async function postSignUp(req,res,next){
    try{      
    const {username,password,email} = req.body
    const {hash,salt} = await hashPassword(password)
    const id = await createUser(username,email,hash,salt)
    res.send(id["userId"])
    /*prisma.userData.delete({
        data : {
            userId : id["userId"]
        }
    })*/

}

catch(err){
    console.error(err)
     res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}





