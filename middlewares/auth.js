const AdminAuth=("/admin",(req,res,next)=>
{
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Admin!!!");
  } else {
    next();
  }
});
const UserAuth=("/user",(req,res,next)=>
    {
      const token = "xyz";
      const isUserAuthorized = token === "xyz";
      if (!isUserAuthorized) {
        res.status(401).send("Unauthorized User!!!");
      } else {
        next();
      }
    });
module.exports={AdminAuth,UserAuth};