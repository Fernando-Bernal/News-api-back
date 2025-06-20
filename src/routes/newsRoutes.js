import { Router } from "express";
import { createNewsController, updateNewsController, getAllNewsController, getNewsByIdController, deleteNewsController, searchNewsController } from "../controllers/newsController.js";
import { validateNews, validateNewsUpdate } from "../middlewares/newsValidator.js";

const router = Router();


router.get("/search", searchNewsController);
router.get("/", getAllNewsController);
router.post("/", validateNews, createNewsController);
router.put("/:id", validateNewsUpdate, updateNewsController);
router.get("/:id", getNewsByIdController);
router.delete("/:id", deleteNewsController);


export default router;
