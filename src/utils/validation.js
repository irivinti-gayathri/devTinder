const signupvalidator=(req)=>
{
    const data=req.body;
    if(data.skills.length>10)
    {
          throw new Error("Skills cannot be greater than 10");
    }  
}
module.exports={signupvalidator};