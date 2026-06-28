import  crypto from "node:crypto"
import fs from "fs"

function genKeyPair(){
    const keypair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding :{
            type : 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding :{
            type: 'pkcs1',
            format: 'pem'
        }
    })

    fs.writeFileSync("/home/tudor/API-/keys/id_rsa_pub.pem", keypair.publicKey)
    fs.writeFileSync("/home/tudor/API-/keys/id_rsa_priv.pem", keypair.privateKey)
    
}


genKeyPair()