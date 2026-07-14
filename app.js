/* Essential libraries */
import express from "express"
import prisma from "./lib/prisma.js"
import jwt from "jsonwebtoken"
import passport from "passport"
import "./config/passport.js"
import cors from "cors"
import verfiyMiddleware from "./config/passport.js"
import cookieParser from "cookie-parser"
import corsOptions from "./config/corsOptions.js"

/* Router objects*/
import accountManageRouter from "./Routes/accountManageRouter.js"
import changeEmailRouter from "./Routes/changeEmail.js"
import changePasswordRouter from "./Routes/changePassword.js"
import accountCreationRouter from "./Routes/accountCreationRouter.js"
import artefactsRouter from "./Routes/artefactsRouter.js"
import accountLogInRouter from "./Routes/accountLogInRouter.js"
import generalInfoRouter from "./Routes/generalInfoRouter.js"
import refreshTokenRouter from "./Routes/refreshTokenRouter.js"
import logOutRouter from "./Routes/logOutRoutes.js"
import {getArtefact} from "./lib/methods.js"
import credentials from "./Controllers/credentials.js"
const app = express()


/* Essential stuff */
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(credentials)
app.use(cors(corsOptions))
app.use(cookieParser())

// app.use(async (req,res,next) =>{

//     const data = await getArtefact("bd760ca4-45dd-491a-a6f7-e1e207ac8db5")
//     console.log(data)
//     next()

// })
app.use("/users/",accountCreationRouter)
app.use("/users/generalInfo",generalInfoRouter)
app.use("/users/login",accountLogInRouter)
app.use("/users/password",verfiyMiddleware,changePasswordRouter)/*To fix !! */
app.use("/users/data",verfiyMiddleware,accountManageRouter) /*To fix !! */
app.use("/users/email",changeEmailRouter)
app.use("/users/artefacts",verfiyMiddleware,artefactsRouter)
app.use("/token/refreshToken", refreshTokenRouter)
app.use("/users/logout",logOutRouter)



app.use((err,req,res,next) =>{
    console.error(err)
    res.status(500).json(err)
})


/*server config */
 
const PORT = 3000
app.listen(PORT ,(error) =>{
    if(error){
        console.error(error)
        return
    }

    console.log(`Running on port ${PORT}`)
})
