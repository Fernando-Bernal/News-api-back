import { validationResult } from "express-validator";
import {
  createNews,
  updateNews,
  getAllNews,
  getNewsById,
  deleteNews,
  searchNews,
} from "../repositories/newsRepositories.js";

async function createNewsController(req, res, next) {
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

async function updateNewsController(req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  try {
    const { id } = req.params;
    const { title, body: bodyText, image_url, author } = req.body;
    const updateData = { title, body: bodyText, image_url, author };
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined || updateData[key] === null || updateData[key] === "") {
        delete updateData[key];
      }
    });
    const updatedNews = await updateNews(id, updateData);
    if (!updatedNews) {
      return res.status(404).json({ message: "Noticia no encontrada" });
    }
    res.status(200).json(updatedNews);
  } catch (error) {
    next(error);
  }
}

async function getAllNewsController(req, res, next) {
  try {
    const news = await getAllNews();
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
}

async function getNewsByIdController(req, res, next) {
  const { id } = req.params;
  try {
    const news = await getNewsById(id);
    if (!news) {
      return res.status(404).json({ message: "Noticia no encontrada" });
    }
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
}

async function deleteNewsController(req, res, next) {
  try {
    const { id } = req.params;
    const news = await getNewsById(id);
    if (!news) {
      return res.status(404).json({ message: "Noticia no encontrada" });
    }
    await deleteNews(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

async function searchNewsController(req, res, next) {
  try {
    const { text } = req.query;
    const news = await searchNews({ text });
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
}

export {
  createNewsController,
  updateNewsController,
  getAllNewsController,
  getNewsByIdController,
  deleteNewsController,
  searchNewsController,
};
