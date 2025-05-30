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

async function getAllNews() {
  return await prisma.news.findMany({ orderBy: { date: "desc" } });
}

async function getNewsById(id){
  return await prisma.news.findUnique({
    where: { id: id },
  });
}

async function deleteNews(id){
  return await prisma.news.delete({
    where: {id: id}
  });
}

export { createNews, updateNews, getAllNews, getNewsById, deleteNews };
