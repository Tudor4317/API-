import prisma from "../lib/prisma.js"

export async function postSetting(req,res){
try{
const {email,password} = req.body
await prisma.user_data.create({
    data : {
        email: email,
        password:password
    }
})

res.send("Change succesfull")


}



catch(err){
    res.status(401).json("Something went wrong !")
}

}

export function getSetting(req,res){
    res.render("settings")
}