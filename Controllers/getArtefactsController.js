import { getArtefact } from "../lib/methods.js"
export async function getArtefactController(req,res){
    try{
    const {userId} = req.user
  
    const artefacts = await getArtefact(userId)
    res.status(200).json({"username" : username, "userId" : userId, "artefacts" : artefacts  })

    }
    catch(err){
        res.status(500).json({message : err})
    }
}
