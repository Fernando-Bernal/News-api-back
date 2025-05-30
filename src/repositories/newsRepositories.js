import prisma from "../../prisma/client.js";

async function createNews(data) {
  return await prisma.news.create({ data });
}

async function updateNews(id, data) {
  return await prisma.news.update({
    where: { id: id },
    data,
  });
}

export { createNews, updateNews };
