import { validationResult } from "express-validator";
import { createNews } from "../repositories/newsRepositories.js";

export async function createNewsController(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { title, body: bodyText, image_url, author } = req.body;
    const newsData = { title, body: bodyText, image_url, author };
    const news = await createNews(newsData);
    res.status(201).json(news);
  } catch (error) {
    next(error);
  }
}