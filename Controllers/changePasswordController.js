import { hashPassword } from "../lib/passwordHashing.js"
import { updatePassword } from "../lib/methods.js"


export default async function changePasswordController(req,res){
    try{
        const {password} = req.body
        const {userId} = req.user
        const {hash,salt} = await hashPassword(password)
        const newPassword = await updatePassword(hash,userId)
        /* testing only !!! : res.send(newPassword) */


    }
       

catch(err){
    console.error(err)
    res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}