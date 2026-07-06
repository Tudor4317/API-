import {getUser} from "../lib/methods.js"


export  async function getAccountController(req,res){
    try{
        const {userId} = req.user
        const user = getUser(userId)
        res.send(user)
        console.log(`Account info : ${user} `)
    }
    catch(err){
        console.error(err)
         res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}
    



