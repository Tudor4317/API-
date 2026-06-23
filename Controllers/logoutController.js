function logoutContorller(req,res){
    req.logout()
    res.redirect("/")
}


export default logoutContorller
