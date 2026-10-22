const request = require("supertest");
const app = require("../app");
const pool = require("../data/db");
const { resetDb } = require("./helpers");

beforeEach(async () => {
  await resetDb();
});

afterAll(async () => {
  await pool.end();
});

describe("Auth Register Tests", () => {
  test("POST /auth/register succeeds and does not return password_hash", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ email: "user@example.com", password: "password123" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe("user@example.com");
    expect(res.body).not.toHaveProperty("password_hash");
    expect(res.body).not.toHaveProperty("password");
  });

  test("POST /auth/register with short password returns 400", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ email: "user@example.com", password: "123" });

    expect(res.status).toBe(400);
  });

  test("POST /auth/register with duplicate email returns 409", async () => {
    await request(app)
      .post("/auth/register")
      .send({ email: "user@example.com", password: "password123" });

    const res = await request(app)
      .post("/auth/register")
      .send({ email: "user@example.com", password: "password123" });

    expect(res.status).toBe(409);
  });
});