const express = require("express");
const {connectDB}=require("./config/database");
const {User}=require("./models/user");
const app=express();
app.post("/signup",async(req,res)=>
{
  const user=new User({
    firstName:"Virat",
    lastName:"Kohli",
    email:"virat@.com",
    password:"virat@1234",
    age:35,
    gender:"Male"
  })
  try{
  await user.save();
  res.send("User added sucessfully");
  }catch(err)
  {
    res.status(400).send("Cannot add User"+err.message);
  }

})
connectDB().then((req,res)=>
{
     console.log("Connected to DB sucessfully");
     app.listen(3000,()=>
      {
        console.log("Connected to server sucessfully");
      })
}).catch((err)=>
{
  console.log("cannot connect to DB");
});




