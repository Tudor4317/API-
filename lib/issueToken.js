   import fs from "fs"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"
import jwt from "jsonwebtoken"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const keypath = path.join(__dirname, '..', 'keys', 'id_rsa_priv.pem')
const privateKey = fs.readFileSync(keypath)

export default function issueToken(userObject) {
const userId = userObject.userId
const expiresIn = '1w'
const payload = {
    sub : userId,
    iat : Date.now()
}
/* change private key !!!!!*/
const signedToken = jwt.sign(payload,privateKey,{expiresIn: expiresIn, algorithm: "RS256"})
return {
    token : 'Bearer' + signedToken,
    expires: expiresIn
    
}

}

