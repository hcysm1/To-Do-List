import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.iorxsaj.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("database connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database connected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database", error.message);
  });
};

export default connection;
