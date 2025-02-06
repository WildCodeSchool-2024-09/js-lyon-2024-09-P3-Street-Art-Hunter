import supertest from "supertest";

import "dotenv/config";
import DatabaseClient from "../../database/client";
import app from "../../src/app";

describe("GET /api/artworks", () => {
  it("should fetch artworks successfully", async () => {
    const response = await supertest(app).get("/api/artworks");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(0);
    expect(response.body[0]).toHaveProperty("id");
  });
});

afterAll(async () => {
  await DatabaseClient.end();
});
