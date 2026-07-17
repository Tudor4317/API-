import { pushArtefacts } from "../lib/methods.js"


export async function pushArtefactsController(req,res){
    try {
        const {userId} = req.user
        const {artefactName,description,isPublic} = req.body
        console.log(req.body)
        const artefacts = await pushArtefacts(userId,artefactName,description,isPublic)
        res.json(artefacts)
    }
    catch(err){
        console.error(err)
          res.status(401).json({message : err})
}}
    

