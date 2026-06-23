import { deleteAccount } from "../lib/methods.js";

export  default async function deleteAccountController(req,res){
    try{
        const username = req.user.username
        await deleteAccount(username)
        res.redirect("/protected-route/settings")
    }

    catch(err){
        console.error(err)
    }
}