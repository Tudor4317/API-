import { pushArtifactsController } from "../Controllers/artifactsController.js";
import { Router } from "express";


const artifactsRouter = Router({mergeParams: true})
artifactsRouter.put("/",pushArtifactsController)

export default artifactsRouter