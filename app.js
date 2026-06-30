/* Essentials libraries */
import express from "express"
import session from "express-session"
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import prisma from "./lib/prisma.js"
import jwt from "jsonwebtoken"

/* Router objects*/
import accountManageRouter from "./Routes/accountManageRouter.js"
import changeEmailRouter from "./Routes/changeEmail.js"
import changePasswordRouter from "./Routes/changePassword.js"
import accountCreationRouter from "./Routes/accountCreationRouter.js"
import artifactsRouter from "./Routes/artifactsRouter.js"


const app = express()


/* Essential stuff */
app.use(express.json())
app.use(express.urlencoded({extended: true}))


/* Express-session configuration..*/
/*app.use(session({
    store: new PrismaSessionStore(
    prisma,
    {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }
  ),
secret: process.env.COOKIE,
 resave: false,
 cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}

}))*/

/*passport middleware */

/*app.use(passport.initialize())
app.use(passport.session())*/


/* Routes : */

/* app.use((req,res,next) =>{
req.body.test = "Hello"
console.log(req.body)
    next()
}) */




app.use("/users/",accountCreationRouter)
/* app.use("/users/login",) */
app.use("/users/:userId/password",changePasswordRouter)
app.use("/users/:userId/data",accountManageRouter) 
app.use("/users/:userId/email",changeEmailRouter)
app.use("/users/:userId/artifacts", artifactsRouter)





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
