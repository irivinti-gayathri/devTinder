const express = require("express");
const app = express();
app.use("/", (req, res) => {
  res.send("Hello!");
});
app.use("/hello", (req, res) => {
  res.send("Hello from the hello!");
});
app.use("/test", (req, res) => {
  res.send("Hello from the test server!");
});


app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
