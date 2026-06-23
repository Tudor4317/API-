import { hashPassword } from "../lib/passwordHashing.js"
import { updatePassword } from "../lib/methods.js"


export default async function changePasswordController(req,res){
    try{
        const {password} = req.body
        const user = req.user.username
        const hashedPassword = hashPassword(password)
        await updatePassword(hashedPassword,user)
        res.redirect("/protected-route/settings")
}

catch(err){
    console.error(err)
}}