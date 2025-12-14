import jwt from "jsonwebtoken";
import secretKey from "../configuration/jwtConfig.js";


 export default function authenticatToken(req,res,next){
    console.log(req.headers)
    const authHeader=req.headers["authorization"]
    if(!authHeader){
       return res.status(401).json({message: "Unauthorize: Missing Token! "})
    }
    const [bearer, token] = authHeader.split(" ")
    if(bearer != "Bearer" || !token){
        res.status(401).json({message: "Unauthorize : Invalide token formate"})
    }

    jwt.verify(token, secretKey, (err,user)=>{
        if(err){
            return res.status(403).json({message: " Forbidden : Invalid Token"})
        }
        req.user=user;
        next()
    })

}

function verifyToken(token){
jwt.verify(token,secretKey);
}

export  {verifyToken};