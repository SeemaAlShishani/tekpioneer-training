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

describe("Tasks API Tests", () => {
  test("GET /tasks returns 200 and 3 items", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
  });

  test("GET /tasks/999 returns 404", async () => {
    const res = await request(app).get("/tasks/999");
    expect(res.status).toBe(404);
  });

  test("POST /tasks with valid data returns 201 with an id", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ text: "New Automated Task", projectId: 1 });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.text).toBe("New Automated Task");
  });

  test("POST /tasks with empty text returns 400", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ text: "   ", projectId: 1 });
    expect(res.status).toBe(400);
  });

  test("POST /tasks with non-existent projectId returns 400", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ text: "Valid Text", projectId: 99 });
    expect(res.status).toBe(400);
  });

  test("DELETE /tasks/:id returns 204 and then GET returns 404", async () => {
    const deleteRes = await request(app).delete("/tasks/1");
    expect(deleteRes.status).toBe(204);

    const getRes = await request(app).get("/tasks/1");
    expect(getRes.status).toBe(404);
  });
});
