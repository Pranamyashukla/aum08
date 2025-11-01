import dotenv from "dotenv";
import express from "express";

import userRoutes from "./routes/user.route.js";// put js extension as it is  a module not inbuilt !!!
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songsRoutes from  "./routes/song.route.js";
import albumsRoutes from "./routes/album.route.js";
import statsRoutes from "./routes/stat.route.js";
import { connectDB } from "./lib/db.js";
import path from "path";


import { clerkMiddleware } from "@clerk/express";

import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();


app.use(express.json());

app.use(clerkMiddleware()); // adding aut to req object - req.auth.

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,

    limits:{
        fileSize: 100*1024*1024 // 100 mb file size limit
    }
})); // to handle file uploads

// ***********  ROUTES  *********** //
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/stats", statsRoutes);

// ********** ERROR HANDLER MIDDLEWARE ********** //
app.use((err, req, res, next) => {
    res.stauts(500).json({message: process.env.NODE_ENV == "production" ? "Internal Server Error" : err.message});
});

app.listen(PORT, () => {
    console.log("Server Listening on port: " + PORT);
    connectDB();
})