import login, { refreshToken } from "../features/login.js";

export default async function loginController(req,res){
    try{
        const {email,password}=req.body;
        const token= await login(email,password)
        res.json({token:token})
    }catch(err){
        res.status(401).json({message:"Invalid credentials"})
    }
}

export async function refreshTokenController(req,res){
    try{
        const {email,password}=req.body;
        const token= await refreshToken(email,password)
        res.json({token:token})
    }catch(err){
        res.status(401).json({message:"Invalid credentials"})
    }
}