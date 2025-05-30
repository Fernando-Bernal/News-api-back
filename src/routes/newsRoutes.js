import { Router } from "express";
import { createNewsController, updateNewsController } from "../controllers/newsController.js";
import { validateNews, validateNewsUpdate } from "../middlewares/newsValidator.js";

const router = Router();

router.post("/", validateNews, createNewsController);
router.put("/:id", validateNewsUpdate, updateNewsController);

export default router;
