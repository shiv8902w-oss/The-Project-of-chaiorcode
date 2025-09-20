import mongoose from "mongoose"
import { Db_NAME } from "../constants"

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONOGDB_URI}/${Db_NAME}`)
        console.log(`\n MongoDB connected ! DB HOST : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb Has Some error",error);
        process.exit(1)
    }
}

export default connectDB