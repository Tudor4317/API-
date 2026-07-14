import { Router } from "express";
import LogOutController from "../Controllers/logOutController.js";

const logOutRouter = Router();

logOutRouter.get("/",LogOutController)

export default logOutRouter