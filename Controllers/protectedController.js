

export function protectedController(req,res){
res.render("protected",{user: req.user.username})
}








