import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/weddingHall`);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Mongodb Connection Error: ${error.message}`);
        process.exit(1);
    } 
}
export default connectDB;