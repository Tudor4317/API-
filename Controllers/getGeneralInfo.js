import { getGeneralInfo } from "../lib/methods.js"


export default async function getGeneralInfoController(req,res){
try{
    const {username} = req.params
    const userData = await getGeneralInfo(username)
    res.status(200).json({"data" : userData})
}
catch(err){
    res.status(401).json({message : "Unexpected error"})
}
}