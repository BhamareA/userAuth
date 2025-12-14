import bcrypt from "bcrypt";
import userModel from "../module/userModule.js";
import generateToken from "../middleware/jwt.js";
import { verifyToken } from "../middleware/authMiddleware.js";

export default async function login(email,password){
    try{
        const existUser= await userModel.findOne({email});
        if(!existUser){
            throw new Error("USer not Found")
        }
        const isPasswordValid=bcrypt.compare(password,existUser.password);
        if(!isPasswordValid){
            throw new Error("Invalid Password")
        }
        const token=generateToken(existUser)
        return token;
    }catch(err){
        throw new Error("Invalid Credentials")
    }
}

export async function refreshToken(oldToken) {
    try{
          const decodeToken=verifyToken(oldToken);
    const user=userModel.findById(decodeToken.id);
    if(!user){
        throw new Error("User not found")
    }
    const newToken= generateToken(user)
    return newToken;

    }catch(err){
        throw new Error("Invalid token")
    }
  
}

