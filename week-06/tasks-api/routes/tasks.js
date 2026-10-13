const express = require("express");
const router = express.Router();
const pool = require("../data/db");
const { validateTaskText } = require("../validation");
const { loadData, saveData } = require("../data/store");

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
    const data = await loadData();
    const { text, projectId } = req.body;
    const error = validateTaskText(text);

    if (error) {
      return res.status(400).json({ error });
    }

    if (projectId === undefined || projectId === null) {
      return res.status(400).json({ error: "projectId is required" });
    }

    const project = data.projects.find((p) => p.id === Number(projectId));
    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    const newTask = {
      id: data.nextTaskId++,
      text: text.trim(),
      done: false,
      projectId: Number(projectId),
    };

    data.tasks.push(newTask);
    await saveData(data);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const data = await loadData();
    const id = Number(req.params.id);
    const task = data.tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const { text, done, projectId } = req.body;

    if ("text" in req.body) {
      const error = validateTaskText(text);
      if (error) return res.status(400).json({ error });
      task.text = text.trim();
    }

    if ("done" in req.body) {
      if (typeof done !== "boolean") {
        return res.status(400).json({ error: "done must be true or false" });
      }
      task.done = done;
    }

    if ("projectId" in req.body) {
      const project = data.projects.find((p) => p.id === Number(projectId));
      if (!project) return res.status(400).json({ error: "Project not found" });
      task.projectId = Number(projectId);
    }

    await saveData(data);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await loadData();
    const id = Number(req.params.id);
    const index = data.tasks.findIndex((t) => t.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    data.tasks.splice(index, 1);
    await saveData(data);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const data = await loadData();
    const id = Number(req.params.id);
    const task = data.tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const { text, done, projectId } = req.body;
    const error = validateTaskText(text);

    if (error || typeof done !== "boolean") {
      return res.status(400).json({
        error: error || "done must be true or false",
      });
    }

    const project = data.projects.find((p) => p.id === Number(projectId));
    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    task.text = text.trim();
    task.done = done;
    task.projectId = Number(projectId);

    await saveData(data);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
