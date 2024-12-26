import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // config.env file

const connectDB = async () => {
    try {
        const URL = process.env.MONGODB_URI;
        const connect = await mongoose.connect(URL);

        if(connect){
            console.log("Database Connected");
        }

    } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`);
    }
};

export default connectDB;