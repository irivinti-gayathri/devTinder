const {mongoose}=require("mongoose");
const connectDB=async (req,res)=>
{
    await mongoose.connect("mongodb+srv://Gayathri:6L0GHu2dzy7MDaC6@namastenode.hgy7i.mongodb.net/devTinder");
}
module.exports={connectDB};



