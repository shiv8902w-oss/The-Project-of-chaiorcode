// require('dotenv').config({path : './env'})

import dotenv from "dotenv"

import mongoose from "mongoose";
import { Db_NAME } from "./constants.js";

dotenv.config({
    path : '.env'
})


import connectDB from "./db/index.js"; 
connectDB()


















































































// import express from "express"
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONOGDB_URI}/${Db_NAME}`)
//         app.on("error", (error) => {
//             console.log("error :",error);
//             throw error} 
//         )

//         app.listen(process.env.PORT , ()=> {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         } )

//     } catch (error) {
//         console.error("Error :",error)
//         throw error
//     }
// } )()