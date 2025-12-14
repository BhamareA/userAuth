import userModel from "../module/userModule.js";
import bcrypt from "bcrypt";

export default async function creatAdmin(){
    try{
       const existingAdmin= await userModel.findOne({email:"admin@gmail.com"});
       if(!existingAdmin){
        const newadmin=new userModel({
            email: "admin@gmail.com",
            name:"Admin",
            password: await bcrypt.hash("admin",10),
            role:"admin"
        })
         await newadmin.save();
         console.log("Admin account created succesfully")

       }else{
        console.log("Admin already exist");
       }

    }catch(err){
        console.error(err.message)
    }
}