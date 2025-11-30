import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const URL_DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/devtree';
        const conection = await mongoose.connect(URL_DB);
        const url = `${conection.connection.host}:${conection.connection.port}`;
        console.log("MongoDB connected in:", url);


    } catch (error) {
        console.error("Error connecting to the database", error);
    }
}