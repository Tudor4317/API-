import refreshTokenController from "../Controllers/refreshTokenController.js";
import { Router } from "express";

const refreshTokenRouter = Router();

refreshTokenRouter.get("/", refreshTokenController)

export default refreshTokenRouter