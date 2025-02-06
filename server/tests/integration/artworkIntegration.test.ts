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

describe("POST /api/artworks", () => {
  it("should add a new artworks successfully", async () => {
    const newArtworks = {
      name: "le combattant",
      address: "17 rue delandine",
      image:
        "https://www.street-artwork.com/uploads/document/5cd2897d5e44d570844651.jpg",
      type_of_art: "wall painting",
      latitude: 45.765236,
      longitude: 4.83311,
      picture_credit: "Rabot",
      id_artist: 1,
    };

    const response = await supertest(app)
      .post("/api/artworks")
      .send(newArtworks);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toBeDefined();
    expect(response.body.insertId).toBe(42);
  });

  it("should fail on invalid request body", async () => {
    const newArtworks = {
      name: "le combattant",
      address: "17 rue delandine",
    };

    const response = await supertest(app)
      .post("/api/artworks")
      .send(newArtworks);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

afterAll(async () => {
  await DatabaseClient.end();
});
