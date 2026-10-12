require("dotenv").config();
const pool = require("./data/db");
const express = require("express");

const tasksRouter = require("./routes/tasks");
const projectsRouter = require("./routes/projects");

const app = express();

const PORT = 4000;

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    console.log(`${req.method} ${req.path} - ${duration}ms`);
  });

  next();
});

// Routes
app.use("/tasks", tasksRouter);
app.use("/projects", projectsRouter);

app.get("/health", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ ok: true, time: result.rows[0].now });
  } catch (err) {
    next(err);
  }
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// Global error handler
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
