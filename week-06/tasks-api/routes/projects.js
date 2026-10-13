const express = require("express");
const router = express.Router();
const pool = require("../data/db");
const { loadData, saveData } = require("../data/store");

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
    const data = await loadData();
    const { name } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Project name is required" });
    }

    const newProject = {
      id: data.nextProjectId++,
      name: name.trim(),
    };

    data.projects.push(newProject);
    await saveData(data);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const data = await loadData();
    const id = Number(req.params.id);
    const project = data.projects.find((p) => p.id === id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const { name } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Project name is required" });
    }

    project.name = name.trim();
    await saveData(data);
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await loadData();
    const id = Number(req.params.id);
    const index = data.projects.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Project not found" });
    }

    const hasTasks = data.tasks.some((t) => t.projectId === id);
    if (hasTasks) {
      return res
        .status(409)
        .json({ error: "Cannot delete project with existing tasks" });
    }

    data.projects.splice(index, 1);
    await saveData(data);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
