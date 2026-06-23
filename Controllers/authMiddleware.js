export default function isAuth(req,res,next){

if(!req.isAuthenticated()){
res.status(401).json("You are not authenticated")
}

else{
next()
}

}


