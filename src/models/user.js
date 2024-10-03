const {mongoose}=require("mongoose");
const {Schema}=mongoose;
const userSchema=new Schema({
  firstName:{
    type:String,
    required:true,
    minLength:3,
    trim:true
  },
  lastName:{
    type:String,
    trim:true
  },
  email:{
      type:String,
      required:true,
      minLength:8,
      unique:true,
      trim:true,
      lowercase:true
    }
  ,
  password:{
    type:String,
    required:true,
    minLength:8
  },
  age:{
    type:Number,
    minLength:18
  },
  gender:{
    type:String,
    lowercase:true,
    validate(value)
    {
      if(!["male","female","others"].includes(value))
        throw new Error("Gender is not valid");
    }
  }
},{timestamps:true})
const User=mongoose.model("User",userSchema);
module.exports={User};
