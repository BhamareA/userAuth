import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String, enum:["admin", "customer"], default:"customer"}
})

const userModel=mongoose.model("User",userSchema);

export default userModel;