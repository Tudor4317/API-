import issueToken from "../lib/issueToken.js";
import prisma from "../lib/prisma.js";
import { verifyHash } from "../lib/passwordHashing.js";
import { Prisma } from "@prisma/client/extension";
export async function  accountLogInController(req,res){
try {
    const {email,password} = req.body
    const user = await prisma.userData.findUnique({
        where : {
           email : email
        },
        select : {
            username : true,
            password : true,
            userId: true
        }
    })   


if(!user){
console.log(user)
  return res.status(401).json({"message" : "User not found !"}) 
}

const passwordCheck = await verifyHash(password,user.password)

if(!passwordCheck){
     return res.status(401).json({"message" : "Wrong password !"})
}

const authToken = issueToken(user)
const token = authToken.refreshToken.split(" ")[1]

await prisma.userData.update({
    where : {
        username:user.username
    },
    data: {
        refreshtoken: token
    }
})
res.cookie("jwt",authToken.refreshToken,{httpOnly: true,sameSite:'lax',maxAge: 15 * 24 * 60 * 60 * 1000})




return res.status(200).json({"accessToken" : authToken.accessToken,"expiresIn": authToken.expires})

}
catch(err){
       res.status(401).json({message: err})

}
}