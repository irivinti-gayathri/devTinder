const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added sucessfully");
  } catch (err) {
    res.status(400).send("Cannot add User" + err.message);
  }
});
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
    res.send("something went wrong ");
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
