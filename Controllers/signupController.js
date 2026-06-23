import { pushData } from "../lib/methods.js"
import { hashPassword } from "../lib/passwordHashing.js"

export function getSignUp(req,res){
res.render("signup")
}


export async function postSignUp(req,res,next){
    try{      
    const {username,password,email} = req.body
    const {hash,salt} = await hashPassword(password)
    await pushData(username,email,hash,salt)
    res.redirect("/")
}

catch(err){
    console.error(err)
    next(err)
}


}

