import { updateEmail } from "../lib/methods.js";

export default async function changeEmailController(req,res){
try{
    const {email} = req.body
    const username = req.user.username
    await updateEmail(email,username)
    res.redirect("/protected-route/settings")
}
catch(err){
    console.error(err)
}

}