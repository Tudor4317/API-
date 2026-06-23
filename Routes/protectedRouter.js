import {Router} from "express";
import { protectedController } from "../Controllers/protectedController.js";
import isAuth  from "../Controllers/authMiddleware.js";
const protectedRouter = Router();
protectedRouter.get("/",isAuth,protectedController)


export default protectedRouter
