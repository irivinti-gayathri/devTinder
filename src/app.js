const express = require("express");
const app = express();

app.get("/user/:userid", (req, res) => {
  console.log(req.params);
  res.send({firstname:"sai",lastname:"bhanu"});
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
