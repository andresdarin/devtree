import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async () => {
    try {
        const URL_DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/devtree';
        const conection = await mongoose.connect(URL_DB);
        const url = `${colors.magenta.bold(conection.connection.host)}:${colors.magenta.bold(conection.connection.port.toString())}`;
        console.log(colors.green.italic("MongoDB connected in:"), url);


    } catch (error) {
        console.error(colors.bgRed.white.bold("Error connecting to the database"), error);
    }
}