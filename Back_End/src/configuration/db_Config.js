import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const url=process.env.DB_URL;

const connectToMongodb= async ()=>{
try{
    console.log(url)
    await mongoose.connect(url);
     console.log("Connected to mongodb");
}catch(err){
    console.log(`mongodb connection error: ${err}`)
}

}

export default connectToMongodb;