import signUp from "../features/signUp.js";

 async function userRegister(req,res){

    try{
        const userData= req.body
        const user= await signUp(userData)
        res.status(201).json({user:user , message: "user created"})
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
 }
 export default userRegister;