const express = require("express");
const router = express.Router();
const pool = require("../data/db");
const { validateTaskText } = require("../validation");

router.get("/stats", async (req, res, next) => {
  try {
    const queryText = `
      SELECT 
        COUNT(*)::int AS total,
        COUNT(*) FILTER (WHERE done)::int AS done,
        (COUNT(*) - COUNT(*) FILTER (WHERE done))::int AS remaining
      FROM tasks
    `;
    const result = await pool.query(queryText);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { done, search } = req.query;

    if (done !== undefined && done !== "true" && done !== "false") {
      return res.status(400).json({
        error: "done must be either true or false",
      });
    }

    const conditions = [];
    const values = [];

    if (done !== undefined) {
      values.push(done === "true");
      conditions.push(`done = $${values.length}`);
    }

    if (search) {
      values.push(search);
      conditions.push(`text ILIKE '%' || $${values.length} || '%'`);
    }

    let queryText =
      'SELECT id, text, done, project_id AS "projectId" FROM tasks';

    if (conditions.length > 0) {
      queryText += " WHERE " + conditions.join(" AND ");
    }

    queryText += " ORDER BY id ASC";

    const result = await pool.query(queryText, values);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);

    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    const queryText =
      'SELECT id, text, done, project_id AS "projectId" FROM tasks WHERE id = $1';
    const result = await pool.query(queryText, [numId]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { text, projectId } = req.body;

    const error = validateTaskText(text);
    if (error) {
      return res.status(400).json({ error });
    }

    if (projectId === undefined || projectId === null) {
      return res.status(400).json({ error: "projectId is required" });
    }

    const queryText = `
      INSERT INTO tasks (text, done, project_id)
      VALUES ($1, false, $2)
      RETURNING id, text, done, project_id AS "projectId"
    `;

    const result = await pool.query(queryText, [
      text.trim(),
      Number(projectId),
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === "23503") {
      return res.status(400).json({ error: "Project not found" });
    }
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    const { text, done, projectId } = req.body;

    if ("text" in req.body) {
      const error = validateTaskText(text);
      if (error) return res.status(400).json({ error });
    }

    if ("done" in req.body && typeof done !== "boolean") {
      return res.status(400).json({ error: "done must be true or false" });
    }

    const newText = "text" in req.body ? text.trim() : null;
    const newDone = "done" in req.body ? done : null;
    const newProjectId = "projectId" in req.body ? Number(projectId) : null;

    const queryText = `
      UPDATE tasks
      SET text = COALESCE($1, text),
          done = COALESCE($2, done),
          project_id = COALESCE($3, project_id)
      WHERE id = $4
      RETURNING id, text, done, project_id AS "projectId"
    `;

    const result = await pool.query(queryText, [
      newText,
      newDone,
      newProjectId,
      numId,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    if (err.code === "23503") {
      return res.status(400).json({ error: "Project not found" });
    }
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    const { text, done, projectId } = req.body;
    const error = validateTaskText(text);

    if (error || typeof done !== "boolean" || projectId === undefined) {
      return res.status(400).json({
        error: error || "done must be true or false and projectId is required",
      });
    }

    const queryText = `
      UPDATE tasks
      SET text = $1, done = $2, project_id = $3
      WHERE id = $4
      RETURNING id, text, done, project_id AS "projectId"
    `;

    const result = await pool.query(queryText, [
      text.trim(),
      done,
      Number(projectId),
      numId,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    if (err.code === "23503") {
      return res.status(400).json({ error: "Project not found" });
    }
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const numId = Number(req.params.id);
    if (!Number.isInteger(numId) || numId <= 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [numId]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
