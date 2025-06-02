import request from "supertest";
import app from "../app.js";

import { describe, it, expect } from "@jest/globals";

describe("GET /news", () => {
  it("debe devolver un array de noticias y status 200", async () => {
    const res = await request(app).get("/news");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
