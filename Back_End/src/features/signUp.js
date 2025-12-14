import userModel from "../module/userModule.js";
import bcrypt from "bcrypt";

export default async function signUp(userData){
    const {name, email,password,role}=userData;
    const hashedPass= await bcrypt.hash(password,10);
    const createduser= new userModel({
        name,email,password:hashedPass,role
    });

    const saveduser= await createduser.save()
    return saveduser;

}