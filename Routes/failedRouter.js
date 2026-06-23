import {Router} from "express";
import { failureController } from "../Controllers/loginFailureController.js";

const failedRouter = Router();
failedRouter.get("/", failureController)

export default failedRouter