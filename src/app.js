import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRoutes from "./routes/newsRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/news", newsRoutes);

export default app;
