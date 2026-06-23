
export async function homeController(req,res){

    console.log(req.user)
    res.render("index",{title: "Home"})

}

