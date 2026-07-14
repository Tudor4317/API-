import prisma from "../lib/prisma.js";


export default async function LogOutController(req,res){
try{
const refreshToken = req.cookies.jwt
if(!refreshToken){
    return res.status(204).json("Already logged out !")
}

const user = await prisma.userData.findFirst({
    where :{
        refreshtoken : refreshToken              
    },
    select :{
        username : true
    }
})

if(!user){
    res.clearCookie('jwt',{httpOnly: true,sameSite:'lax', maxAge: 15 * 24 * 60 * 60 * 1000})
    return res.status(204).json("Already logged out !")
}


await prisma.userData.update({
    where : {
        username : user.username
    },
    data :{
        refreshtoken : null
    }
})

res.clearCookie('jwt',{httpOnly: true, sameSite:'lax', maxAge: 15 * 24 * 60 * 60 * 1000})
res.status(204).json("successfully logged out")


}
catch(err){
res.status(401).json(err)
}

}