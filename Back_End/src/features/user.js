import userModel from "../module/userModule.js";

export default async function getUser(){
    const users= await userModel.find()
    return users;
}