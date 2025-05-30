import { Router } from "express";
import { createNewsController } from "../controllers/newsController.js";
import { validateNews } from "../middlewares/newsValidator.js";

const router = Router();

router.post("/", validateNews, createNewsController);

export default router;