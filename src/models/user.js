const {mongoose}=require("mongoose");
const {Schema}=mongoose;
const validator=require("validator");
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
      lowercase:true,
      validate(value)
      {
        const val=validator.isEmail(value);
        if(!val)
          throw new Error("Invalid Email");
      }
    }
  ,
  password:{
    type:String,
    required:true,
    minLength:8,
    validate(value)
    {
      const val=validator.isStrongPassword(value);
      if(!val)
        throw new Error("Enter Strong Password");
    }
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
  },
  about:
  {
    type:String,
    default:"This is basic info about users"
  },
  skills:{
    type:[String]
  },
  photoUrl:
  {
    type:String,
    default:"https://www.pexels.com/photo/waving-sea-at-sunset-time-4831861/",
    validate(value)
    {
      const val=validator.isURL(value);
      if(!val)
      {
        throw new Error("Invalid URL");
      }
    }
  }
},{timestamps:true})
const User=mongoose.model("User",userSchema);
module.exports={User};
