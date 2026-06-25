
import prisma from "./prisma.js";

export async function createUser(username,email,password,salt){
try{
    
    
    const user = await prisma.userData.create({
    data: {
       username: username,
       email: email,
       password: password,
       salt:salt,
    },
   select: {
    userId : true,

   }

})

return user

}

catch(err){
    console.error(err)
}
}


export async function getUser(id){
    try{
        const user = await prisma.userData.findUnique({
            where : {
                userId: id
            },
            select : {
                username: true
            }
        })

        return user 
        
    }

    catch(err){
        console.error(err)
    }
}






/*export async function verifyUser(id){
    try{
        const userObject = await prisma.userData.findFirst({
            where : {
                userId : id
            }
        })

        return userObject
    }

    catch(err){
        console.error(err)
    }
}*/



export async function updatePassword(hash,salt,id){
    try{
        const password = await prisma.userData.update({
            where :{
                userId : id
            },
            data: {
               password : hash,
               salt: salt
            },

            select : {
                password: true
            }
        }
        )

        return password
    }

    catch(err){
        console.error(err)
    }
}

export async function updateEmail(email,id){
    try{
        const email = await prisma.userData.update({
            where :{
                userId: id
            },
            data: {
               email : email 
            },
            select : {
                email : true
            }
        }
        )

        return email
    }



    catch(err){
        console.error(err)
    }
}

export async function deleteAccount(id){
    try{
        const user = await prisma.userData.delete({
            where :{
                id : id
            },

            select : {
                username : true
            }
        })
        return user
    }

    catch(err){
        return console.error(err)
    }
}

export async function getArtifacts(id){
    try{
        const artifacts = await prisma.userData.findFirst({

        })
    }

    catch(err){
        console.error(err)
    }
}


export async function pushArtifacts(userid,artifact){
try{
   const data =  await prisma.userData.update({
        where : {
            userId : userid
        },
        data : {
            artifacts: {
                create : {
                    artifact : artifact
                    
                }
            }
        },
        select : {
            artifacts : true
        }
    })

    return data

}

catch(err){
    return console.error(err)
}
}