import issueToken from "../lib/issueToken.js";
import prisma from "../lib/prisma.js";
import { verifyHash } from "../lib/passwordHashing.js";
export async function  accountLogInController(req,res){
try {
    const {username,password} = req.body
    const user = await prisma.userData.findUnique({
        where : {
            username: username
        },
        select : {
            username : true,
            password : true,
            userId: true
        }
    })   
if(!user){
  return res.status(401).json({"error" : "User not found !"}) 
}

const passwordCheck = await verifyHash(password,user.password)

if(!passwordCheck){
     return res.status(401).json({"error" : "Wrong password !"})
}

const authToken = issueToken(user)

return res.status(200).json({"token" : authToken.token,"expiresIn": authToken.expires})

}
catch(err){
       res.status(401).json(`Something went wrong ! Here is the error : ${err}`)

}
}