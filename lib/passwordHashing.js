import bcrypt from "bcryptjs"

export async function hashPassword(password){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    return {
        salt:salt,
        hash: hash 
    }
}

export async function verifyHash(password,hash){

    try{
        const verifyHash = await bcrypt.compare(password,hash)
        if(!verifyHash){
            return false
        }
        return true 

    }
    catch(err){
        console.error(err)
    }

    

}