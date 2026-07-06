import { getArtefact } from "../lib/methods.js"
export async function getArtefactController(req,res){
    try{
    const {userId,username} = req.user
    const artifacts = await getArtefact()
    res.status(200).json({"username" : username, "userId" : userId, "artifacts" : artifacts  })

    }
    catch(err){
        res.status(500).json(`Something went wrong ! Here is the error : ${err}`)
    }
}
