import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conencted to MongoDb ${conn.connection.host}');
    }
    catch(error){
        console.log("Failed to establish connection with MongoDb", error);

        process.exit(1);
    }
}