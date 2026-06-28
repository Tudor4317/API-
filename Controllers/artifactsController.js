import { pushArtifacts } from "../lib/methods.js"


export async function pushArtifactsController(req,res){
    try {
        const {userId} = req.params
        const {artifact} = req.body
        const artifacts = await pushArtifacts(userId,artifact)
        res.send(artifacts)
    }
    catch(err){
        console.error(err)
          res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}
    
