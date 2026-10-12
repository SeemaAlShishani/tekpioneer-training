const express = require("express");
const router = express.Router();

const { loadData, saveData } = require("../data/store");

// GET all projects
router.get("/", async (req, res, next) => {
  try {
    const data = await loadData();

    res.json(data.projects);
  } catch (err) {
    next(err);
  }
});

// GET tasks belonging to a project
router.get("/:id/tasks", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const project = data.projects.find((p) => p.id === id);

    if (!project) {
      return res.status(404).json({
        error: "Project not found"
      });
    }

    const projectTasks = data.tasks.filter(
      (task) => task.projectId === id
    );

    res.json(projectTasks);
  } catch (err) {
    next(err);
  }
});

// GET one project
router.get("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const project = data.projects.find(
      (p) => p.id === id
    );

    if (!project) {
      return res.status(404).json({
        error: "Project not found"
      });
    }

    res.json(project);
  } catch (err) {
    next(err);
  }
});

// POST create project
router.post("/", async (req, res, next) => {
  try {
    const data = await loadData();

    const { name } = req.body;

    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({
        error: "Project name is required"
      });
    }

    const newProject = {
      id: data.nextProjectId++,
      name: name.trim()
    };

    data.projects.push(newProject);

    await saveData(data);

    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

// PATCH update project
router.patch("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const project = data.projects.find(
      (p) => p.id === id
    );

    if (!project) {
      return res.status(404).json({
        error: "Project not found"
      });
    }

    const { name } = req.body;

    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({
        error: "Project name is required"
      });
    }

    project.name = name.trim();

    await saveData(data);

    res.json(project);
  } catch (err) {
    next(err);
  }
});

// DELETE project
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const projectIndex = data.projects.findIndex(
      (p) => p.id === id
    );

    if (projectIndex === -1) {
      return res.status(404).json({
        error: "Project not found"
      });
    }

    const hasTasks = data.tasks.some(
      (task) => task.projectId === id
    );

    if (hasTasks) {
      return res.status(409).json({
        error: "Cannot delete project with tasks"
      });
    }

    data.projects.splice(projectIndex, 1);

    await saveData(data);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;