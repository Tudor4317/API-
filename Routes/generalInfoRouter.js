import  getGeneralInfoController from "../Controllers/getGeneralInfo.js";
import { Router } from "express";

const generalInfoRouter = Router()

generalInfoRouter.get("/:username",getGeneralInfoController)

export default generalInfoRouter