import getUser from "../features/user.js"

export default async function getusercontroller(req,res) {
    try{
        const users= await getUser()
        res.status(201).json(users)
    }catch(err){
        res.status(500).json({message:err.message});
    }
    
}