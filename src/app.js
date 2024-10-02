const express = require("express");
const app = express();
// app.use("/", (req, res) => {
//   res.send("Hello!");
// });
// app.use("/hello", (req, res) => {
//   res.send("Hello from the hello!");
// });
// app.use("/test", (req, res) => {
//   res.send("Hello from the test server!");
// });
app.get("/user", (req, res) => {
  res.send({firstname:"sai",lastname:"bhanu"});
});
app.post("/user", (req, res) => {
  res.send("data added to db successfully");
});
app.patch("/user",(req,res)=>
{
  res.send("data updated sucessfully");
})
app.delete("/user", (req, res) => {
  res.send("data deleted from db successfully");
});



app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
