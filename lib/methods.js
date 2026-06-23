
import prisma from "./prisma.js";

export async function pushData(username,email,password,salt){
try{
    
    
    const user = await prisma.userData.create({
    data: {
       username: username,
       email: email,
       password: password,
       salt:salt,
    },
    include: {
        artifacts:true
    }

})



}

catch(err){
    console.error(err)
}
}


export async function pullData(username){
    try{
        const user = await prisma.userData.findUnique({
            where : {
                username: username
            },
            select : {
                password: true,
                username: true
            }
        })

        return user 
        
    }

    catch(err){
        console.error(err)
    }
}






export async function verifyUser(id){
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
}



export async function updatePassword(password,username){
    try{
        await prisma.userData.update({
            where :{
                username: username
            },
            data: {
               password : password 
            }
        }
        )
    }

    catch(err){
        console.error(err)
    }
}

export async function updateEmail(email,username){
    try{
        await prisma.userData.update({
            where :{
                username: username
            },
            data: {
               email : email 
            }
        }
        )
    }

    catch(err){
        console.error(err)
    }
}

export async function deleteAccount(username){
    try{
        await prisma.userData.delete({
            where :{
                username : username
            }
        })
    }

    catch(err){
        console.error(err)
    }
}
