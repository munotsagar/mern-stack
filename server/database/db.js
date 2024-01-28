import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB_USER = process.env.DB_USER;

const DB_PASSWORD= process.env.DB_PASSWORD

const MONGODB_URI = "mongodb://localhost:27017/mern";

const Connection = () => {

  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("DB connected successfully...");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected successfully...");
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err.message);
  });
};

export default Connection;
