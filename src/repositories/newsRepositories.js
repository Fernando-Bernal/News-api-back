import prisma from "../../prisma/client.js";

export async function createNews(data) {
  return await prisma.news.create({ data });
}