const express = require("express");

const app = express();


app.get("/user",(req,res)=>
{
  throw new Error("something went wrong!");
 res.send("User Api called sucessfully");
});
app.use("/",(err,req,res,next)=>
{
  if(err)
    res.status(500).send("Error Occured");
})

app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
