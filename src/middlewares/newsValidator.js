import { body } from "express-validator";

export const validateNews = [
  body("title").notEmpty().withMessage("El título es obligatorio"),
  body("body").notEmpty().withMessage("El cuerpo es obligatorio"),
  body("image_url").isURL().withMessage("La imagen debe ser una URL válida"),
  body("author").notEmpty().withMessage("El autor es obligatorio"),
];
