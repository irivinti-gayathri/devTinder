const express = require("express");
const app = express();

app.get("/admin/getallData", (req, res) => {
  const token = "xz";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("Data sent");
  } else {
    res.status(401).send("Unauthorized Admin!!!");
  }
});
app.get("/admin/Deleteuser", (req, res) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("Deleted a user");
  } else {
    res.status(401).send("Unauthorized Admin!!!");
  }
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000....");
});
