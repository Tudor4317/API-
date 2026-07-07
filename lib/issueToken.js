   import fs from "fs"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"
import jwt from "jsonwebtoken"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const accessTokenkeypath = path.join(__dirname, '..', 'keys', 'accessTokenKeys', 'id_rsa_priv.pem')
const refreshTokenkeypath = path.join(__dirname, '..', 'keys', 'refreshTokenKeys', 'id_rsa_priv.pem')

const accessTokenprivateKey = fs.readFileSync(accessTokenkeypath)
const refreshTokenprivateKey = fs.readFileSync(refreshTokenkeypath)

export default function issueToken(userObject) {
const userId = userObject.userId
const expiresIn = '1w'
const payload = {
    sub : userId,
    
}
/* change private key !!!!!*/

const accessToken = jwt.sign(payload,accessTokenprivateKey,{expiresIn : '15m',algorithm: "RS256"})
const refreshToken = jwt.sign(payload,refreshTokenprivateKey,{expiresIn: '14d', algorithm: "RS256"})
return {
    refreshToken : 'Bearer ' + refreshToken,
    accessToken : 'Bearer ' + accessToken,
    expires: expiresIn
    
}

}

