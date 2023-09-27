import express from "express";
import cors from "cors";
import "dotenv/config";
import connectionDB from "./src/Db/connectDb.js";
import path from "path";
import userRouter from "./src/Routes/userRoutes.js";
import RoleRouter from "./src/Routes/roleRoutes.js";
const PORT = process.env.PORT || 4000;

connectionDB();
const app = express();

app.use(express.json());
const __dirname = path.resolve();
app.use("/api/public", express.static(path.join(__dirname, "./public")));
app.use(cors());

// routes
app.use("/api/users", userRouter);
app.use("/api/roles", RoleRouter);

app.listen(PORT, () => {
  console.log(`Server is runing PORT:${PORT}`);
});
