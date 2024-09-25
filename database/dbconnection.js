import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "MERN_STACK_JOB_SEEKING"
    }).then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(`some error in database while connecting: $(err)`);
    });
    
};