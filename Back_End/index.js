import express from "express"
import dotenv from "dotenv"
import connectToMongodb from "./src/configuration/db_Config.js";
import userroute from "./src/routes/userRoute.js";
import bodyParser from "body-parser";
// import authenticatToken from "./src/middleware/authMiddleware.js";
import cors from "cors";
// import loginRoute from "./src/routes/loginRoute.js";


const server= express()
import creatAdmin from "./src/admin/admin.js";
dotenv.config()
const port=process.env.PORT;


server.use(bodyParser.json());
server.use(cors());
creatAdmin();


server.use('/user',userroute)


server.listen(port,()=>{
    connectToMongodb();
    console.log("server is listening at port number",port)
    
})
