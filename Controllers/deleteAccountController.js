import { deleteAccount } from "../lib/methods.js";


export  async function deleteAccountController(req,res){
    try{
       const {userId} = req.params
       const user = await deleteAccount(userId)
       res.send(user)
      console.log(`User ${user} was deleted succesfully !`)
    }

    catch(err){
        console.error(err)
         res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}
    
