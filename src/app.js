const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");
const bcrypt=require("bcrypt");
const {signupvalidator}=require("./utils/validation");
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {

  try{
  signupvalidator(req);
  const{firstName,lastName,email,password}=req.body;
  const passwordhash=await bcrypt.hash(password,5);
  const user = new User({
    firstName,
    lastName,
    email,
    password:passwordhash
  });
    await user.save();
    res.send("User added sucessfully");
  } catch (err) {
    res.status(400).send("Cannot add User => " + err.message);
  }
});
app.post("/login",async(req,res)=>
{
    try{
      const {email,password}=req.body;
      const user=await User.findOne({email});
      if(!user)
      {
        throw new Error("Invalid Credentials");
      }
      const ispasswordvalidate= await bcrypt.compare(password,user.password);
      if(ispasswordvalidate)
      {
        res.send("user logined succesfully");
      }
      else{
        throw new Error("Invalid Credentials");
      }

    }
    catch (err) {
      res.status(400).send("Something went wrong => " + err.message);
    }
})
app.get("/userbyemail", async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email});
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.send("something went wrong => "+err.message);
  }
});
app.get("/userbyid", async (req, res) => {
  const _id = req.body._id;
  try {
    const user = await User.findById({_id});
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.send("something went wrong ");
  }
});
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length===0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.send("something went wrong ");
  }
});
app.delete("/userbyId",async(req,res)=>
{
  const _id=req.body._id;
  try{
    const deleteduser=await User.findByIdAndDelete(_id);
    if(!deleteduser)
    {
      res.status(404).send("User not found");
    }
    else{
      res.send("Deleted user sucessfully");
    }
  }
  catch(err)
  {
    res.send("Something went wrong");
  }
});
app.patch("/user/:_id",async(req,res)=>
  {
    const _id=req.params._id;
    const data=req.body;
    try{
      const Allowedtoupdate=["lastname","age","skills","about"];
      const isAllowedtoupdate=Object.keys(data).every((k)=>Allowedtoupdate.includes(k)
      )
      if(!isAllowedtoupdate)
      {
        throw new Error("Updation is not valid");
      }
      if(data.skills.length>10)
        {
          throw new Error("Skills cannot be greater than 10");
        }

      const updateduser=await User.findByIdAndUpdate({_id},data,{returnDocument:"after",runValidators: true});
      if(!updateduser)
      {
        res.status(404).send("User not found");
      }
      else{
        res.send("Updated user data sucessfully");
      }
    }
    catch(err)
    {
      res.send("Something went wrong => "+err.message);
    }
  });
  app.patch("/userbyemail",async(req,res)=>
    {
      const email=req.body.email;
      const data=req.body;
      try{
        
        const Allowedtoupdate=["lastname","age","skills","about"];
      const isAllowedtoupdate=Object.keys(data).every((k)=>
      {
        Allowedtoupdate.includes(k);
      }
      )
      if(!isAllowedtoupdate)
      {
        throw new Error("Updation is not valid");
      }
      if(data.skills.length>10)
        {
          throw new Error("Skills cannot be greater than 10");
        }
        const updateduser=await User.findOneAndUpdate({email},data,{runValidators: true});
        if(!updateduser)
        {
          res.status(404).send("User not found");
        }
        else{
          res.send("Updated user data sucessfully");
        }
      }
      catch(err)
      {
        res.send("Something went wrong => "+err.message);
      }
    });
connectDB()
  .then((req, res) => {
    console.log("Connected to DB sucessfully");
    app.listen(3000, () => {
      console.log("Connected to server sucessfully");
    });
  })
  .catch((err) => {
    console.log("cannot connect to DB");
  });
