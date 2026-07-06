import { pushArtefactsController } from "../Controllers/pushArtefactsController.js";
import { Router } from "express";
import { getArtefactController } from "../Controllers/getArtefactsController.js";

const artefactsRouter = Router()
artefactsRouter.put("/",pushArtefactsController)
artefactsRouter.get("/",getArtefactController)
export default artefactsRouter