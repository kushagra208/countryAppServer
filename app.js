import express from "express";
import User from "./routes/User.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use("/api/v1" , User);

app.get("/" , (req , res) => {
    res.send("Server is running");
});
const handleRejection = (error) => {
    console.log("Error:", error);
}

process.on("unhandledRejection" , handleRejection);