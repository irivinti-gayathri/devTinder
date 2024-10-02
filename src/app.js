const express = require("express");
const app = express();
// app.get("/a*d", (req, res) => {
//   res.send({firstname:"sai",lastname:"bhanu"});
// });
// // app.get("/a(bc)?d", (req, res) => {
//   res.send({firstname:"sai",lastname:"bhanu"});
// });
// app.get("/a(bc)+d", (req, res) => {
//   res.send({firstname:"sai",lastname:"bhanu"});
// });
// app.get("/user", (req, res) => {
//  res.send({firstname:"sai",lastname:"bhanu"});
// });
// app.post("/user", (req, res) => {
//   res.send("data added to db successfully");
// });
// app.patch("/user",(req,res)=>
// {
//   res.send("data updated sucessfully");
// })
// app.delete("/user", (req, res) => {
//   res.send("data deleted from db successfully");
// });

app.get(/a/, (req, res) => {
  res.send({firstname:"sai",lastname:"bhanu"});
});
app.get(/.*abc$/, (req, res) => {
  res.send({firstname:"sai",lastname:"bhanu"});
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
