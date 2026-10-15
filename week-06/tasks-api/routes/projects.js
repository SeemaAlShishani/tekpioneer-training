const express = require("express");
const router = express.Router();
const pool = require("../data/db");

router.get("/stats", async (req, res, next) => {
  try {
    const queryText = `
      SELECT 
        projects.id,
        projects.name,
        COUNT(tasks.id)::int AS "taskCount",
        COALESCE(
          ROUND(
            (COUNT(tasks.id) FILTER (WHERE tasks.done)::numeric / NULLIF(COUNT(tasks.id), 0)) * 100, 
            2
          ), 
          0
        )::float AS "percentDone"
      FROM projects
      LEFT JOIN tasks ON projects.id = tasks.project_id
      GROUP BY projects.id, projects.name
      ORDER BY projects.id ASC
    `;
    const result = await pool.query(queryText);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT id, name FROM projects ORDER BY id ASC",
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const result = await pool.query(
      "SELECT id, name FROM projects WHERE id = $1",
      [numId],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/tasks", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const projectCheck = await pool.query(
      "SELECT id FROM projects WHERE id = $1",
      [numId],
    );
    if (projectCheck.rows.length === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const queryText =
      'SELECT id, text, done, project_id AS "projectId" FROM tasks WHERE project_id = $1 ORDER BY id ASC';
    const result = await pool.query(queryText, [numId]);

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Project name is required" });
    }

    const result = await pool.query(
      "INSERT INTO projects (name) VALUES ($1) RETURNING id, name",
      [name.trim()],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const { name } = req.body;
    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Project name is required" });
    }

    const result = await pool.query(
      "UPDATE projects SET name = $1 WHERE id = $2 RETURNING id, name",
      [name.trim(), numId],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const result = await pool.query("DELETE FROM projects WHERE id = $1", [
      numId,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(204).send();
  } catch (err) {
    if (err.code === "23503") {
      return res
        .status(409)
        .json({ error: "Cannot delete project with existing tasks" });
    }
    next(err);
  }
});

module.exports = router;
