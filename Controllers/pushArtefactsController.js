import { pushArtefacts } from "../lib/methods.js"


export async function pushArtefactsController(req,res){
    try {
        const {userId} = req.user
        const {artefact,description,isPublic} = req.body
        const artefacts = await pushArtefacts(userId,artefact,description,isPublic)
        res.send(artefacts)
    }
    catch(err){
        console.error(err)
          res.status(401).json(`Something went wrong ! Here is the error : ${err}`)
}}
    

