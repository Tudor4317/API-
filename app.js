/* Essential libraries */
import express from "express"
import session from "express-session"
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import prisma from "./lib/prisma.js"
import jwt from "jsonwebtoken"
import passport from "passport"
import "./config/passport.js"
import cors from "cors"
import verfiyMiddleware from "./config/passport.js"
import cookieParser from "cookie-parser"

/* Router objects*/
import accountManageRouter from "./Routes/accountManageRouter.js"
import changeEmailRouter from "./Routes/changeEmail.js"
import changePasswordRouter from "./Routes/changePassword.js"
import accountCreationRouter from "./Routes/accountCreationRouter.js"
import artefactsRouter from "./Routes/artefactsRouter.js"
import accountLogInRouter from "./Routes/accountLogInRouter.js"
import generalInfoRouter from "./Routes/generalInfoRouter.js"
import refreshTokenRouter from "./Routes/refreshTokenRouter.js"

const app = express()


/* Essential stuff */
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())


// app.use(async (req,res) =>{
//     try{
//         const artifacts = await  prisma.artifacts.findMany({
//             where : {
//                 userId : "d80a28a2-f59b-4821-a9d2-77bbca312867"
//             }
            
//         })
//         console.log(artifacts)
//         return artifacts
//     }

//     catch(err) {
//         return err
//     }
// })
app.use("/users/",accountCreationRouter)
app.use("/users/generalInfo",generalInfoRouter)
app.use("/users/login",accountLogInRouter)
app.use("/users/password",verfiyMiddleware,changePasswordRouter)
app.use("/users/data",verfiyMiddleware,accountManageRouter) 
app.use("/users/email",changeEmailRouter)
app.use("/users/artefacts",verfiyMiddleware,artefactsRouter)
app.use("/refreshToken", refreshTokenRouter)




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
