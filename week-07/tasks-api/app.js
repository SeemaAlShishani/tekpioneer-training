const express = require("express");
const tasksRouter = require("./routes/tasks");
const projectsRouter = require("./routes/projects");
const authRouter = require("./routes/auth");
const pool = require("./data/db");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${duration}ms`);
  });
  next();
});

app.get("/health", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ ok: true, time: result.rows[0].now });
  } catch (err) {
    next(err);
  }
});

app.use("/auth", authRouter);
app.use("/tasks", tasksRouter);
app.use("/projects", projectsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      error: "Invalid JSON body",
    });
  }

  console.error(err);
  res.status(500).json({
    error: "Internal server error",
  });
});

module.exports = app;
