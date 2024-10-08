import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successfully.");
    return connection;
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
    process.exit(1); // Optionally exit the process if MongoDB connection fails
  }
};

export default connectDB;
