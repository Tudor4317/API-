import express from "express"

const app = express()

app.get("/users/",(req,res) =>{

    res.send("Made a get request")

})

app.post("/users",(req,res) =>{

      res.send("Made a post request")

})


app.put("/users/:userId", (req,res) => {
  res.send("Made a put request")
})


app.delete("/users/:userId",(req,res) =>{
  res.send("Made a delete request")
})

app.listen(3000,(err) =>{
    if(err){
       return console.error(err)
    }

    console.log("running ")
})