// Import the supertest library for making HTTP requests
import supertest from "supertest";

// Import the Express application
// import app from "../../src/app";

// Import databaseClient
// import databaseClient from "../../database/client";

// import type { Result, Rows } from "../../database/client";

// Test suite for the GET /api/items route
// describe("GET /api/items", () => {
//   it("should fetch items successfully", async () => {
//     // Mock empty rows returned from the database
//     const rows = [] as Rows;

//     // Mock the implementation of the database query method
//     jest
//       .spyOn(databaseClient, "query")
//       .mockImplementation(async () => [rows, []]);

//     // Send a GET request to the /api/items endpoint
//     const response = await supertest(app).get("/api/items");

//     // Assertions
//     expect(response.status).toBe(200);
//     expect(response.body).toStrictEqual(rows);
//   });
// });