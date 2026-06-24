import { updateEmail } from "../lib/methods.js";

export default async function changeEmailController(req,res){
try{
    const {email} = req.body
    const {userId} = req.params
    const newEmail = await updateEmail(email,userId)
    res.send(newEmail)
      console.log(`Email updated succesfully ! New email : ${newEmail}`)
}
catch(err){
    console.error(err)
     res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}


