import { deleteAccount } from "../lib/methods.js";

export  default async function deleteAccountController(req,res){
    try{
       const {userId} = req.params
       const user = await deleteAccount(userId)
       res.send(user)
      console.log(`User ${user} was deleted succesfully !`)
    }

    catch(err){
        console.error(err)
    }
}