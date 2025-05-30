import { body } from "express-validator";

const validateNews = [
  body("title").notEmpty().withMessage("El título es obligatorio"),
  body("body").notEmpty().withMessage("El cuerpo es obligatorio"),
  body("image_url").isURL().withMessage("La imagen debe ser una URL válida"),
  body("author").notEmpty().withMessage("El autor es obligatorio"),
];

const validateNewsUpdate = [
  body("title")
    .optional({ checkFalsy: true })
    .notEmpty()
    .withMessage("El título es obligatorio si se envía"),
  body("body")
    .optional({ checkFalsy: true })
    .notEmpty()
    .withMessage("El cuerpo es obligatorio si se envía"),
  body("image_url")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("La imagen debe ser una URL válida si se envía"),
  body("author")
    .optional({ checkFalsy: true })
    .notEmpty()
    .withMessage("El autor es obligatorio si se envía"),
];

export { validateNews, validateNewsUpdate };
