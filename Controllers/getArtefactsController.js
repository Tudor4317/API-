import { getArtefact } from "../lib/methods.js"
export async function getArtefactController(req,res){
    try{
    const {userId} = req.user
  
    const artefacts = await getArtefact(userId)
    console.log(artefacts)
    res.status(200).json({ "userId" : userId, "artefacts" : artefacts  })

    }
    catch(err){
        console.log(err)
        res.status(500).json({message : err})
    }
}
