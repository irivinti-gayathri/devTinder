const express = require("express");
const app = express();

app.get("/user", 
  (req, res,next) => {
  console.log("Handling route handler 1");
 // res.send("1st Route Handler..");
  next();
},
[(req, res,next) => {
  console.log("Handling route handler 2");
  next();
},
(req, res,next) => {
  console.log("Handling route handler 3");
  next();
}],
(req, res) => {
  console.log("Handling route handler 4");
  res.send("4th Route Handler..");
},
);

app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
