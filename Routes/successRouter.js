import {Router} from "express";
import { successController } from "../Controllers/loginSuccessController.js";

const successRouter = Router();
successRouter.get("/", successController)

export default successRouter