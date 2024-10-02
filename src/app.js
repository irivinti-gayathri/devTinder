const express = require("express");
const {AdminAuth,UserAuth}=require("/data/DEVTINDER/middlewares/auth");
const app = express();

app.get("/admin/getallData", AdminAuth,(req, res) => {
  res.send("Data sent");
});
app.get("/admin/Deleteuser",AdminAuth, (req, res) => {
  res.send("Deleted a user");
});
app.get("/user/login",(req,res)=>
{
  res.send("User Logined Sucessfully");
});
app.get("/user/data",UserAuth,(req,res)=>
  {
    res.send("User Data Sent");
  });

app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
