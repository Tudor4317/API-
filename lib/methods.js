
import prisma from "./prisma.js";

export async function createUser(username,email,password){
try{
    
    
    const user = await prisma.userData.create({
    data: {
       username: username,
       email: email,
       password: password,

    },
   select: {
    userId : true,
    username : true

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



export async function updatePassword(hash,id){
    try{
        const password = await prisma.userData.update({
            where :{
                userId : id
            },
            data: {
               password : hash,
              
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

/* To fix !!!*/ export async function deleteAccount(username){ 
    try{
        const user = await prisma.userData.delete({
            where :{
                username: username
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




export async function pushArtefacts(id,artefact,description,isPublic){
try{
    const date = Date.now()
    const timestamps = new Date(date)
   const data =  await prisma.userData.update({
        where : {
            userId : id
        },
        data : {
            artefacts: {
                create : {
                    artefact : artefact,
                    description : description,
                    isPublic : isPublic,
                    date : timestamps.toString()

                    
                }
            }
        },
        select : {
            artefacts : true
        }
    })

    return data

}

catch(err){
    return console.error(err)
}
}


export async function getArtefact(id){
    try{
        const artefacts = await  prisma.artefacts.findMany({
            where : {
                userId : id

            }
            
        })
        
        return artefacts
    }

    catch(err) {
      return console.error(err)
    }
}


export async function getGeneralInfo(username){
    try{
        const userData = await prisma.userData.findFirst({
           where :{
            username : username,

           },
        select :{
            username : true,
            userId : true,
            artefacts : {
                where :{
                    isPublic : true
                }
            }
        }
        })

        return userData
    }
    catch(err){
       return console.error(err)
    }
}