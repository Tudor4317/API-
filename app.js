/* Essentials libraries */
import express from "express"
import session from "express-session"
import passport from "passport"
import "./config/passport.js"
import "dotenv/config"
import prisma from "./lib/prisma.js"
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

/* Router objects*/
import loginRouter from "./Routes/loginRouter.js"
import signupRouter from "./Routes/signupRouter.js"
import homeRouter from "./Routes/homeRouter.js"
import successRouter from "./Routes/successRouter.js"
import protectedRouter from "./Routes/protectedRouter.js"
import failedRouter from "./Routes/failedRouter.js"
import settingsRouter from "./Routes/settingsRouter.js"
import isAuth from "./Controllers/authMiddleware.js"



const app = express()


/* Essential stuff */
app.use(express.urlencoded({extended: true}))
app.set('views', process.env.VIEWS)
app.set("view engine", "ejs")

/* Express-session configuration..*/
app.use(session({
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

}))

/*passport middleware */

app.use(passport.initialize())
app.use(passport.session())


/* Routes : */

/*app.use((req,res,next) =>{
console.log(updatePassword("It works !", "8"))
    next()
})  */
app.use("/",homeRouter)
app.use("/sign-up",signupRouter)
app.use("/log-in",loginRouter)
app.use("/protected-route",isAuth,protectedRouter)
app.use("/login-failure", failedRouter)
app.use("/login-success", successRouter)
app.use("/protected-route/settings",settingsRouter)
app.use((err,req,res,next) =>{
    console.error(err)
    res.status(500).render("error", {message:err})
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