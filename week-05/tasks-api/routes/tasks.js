const express = require("express");
const router = express.Router();

const { loadData, saveData } = require("../data/store");
const { validateTaskText } = require("../validation");

// GET all tasks + filters
router.get("/", async (req, res, next) => {
  try {
    const data = await loadData();

    let result = data.tasks;

    if (req.query.done !== undefined) {
      const done = req.query.done === "true";

      result = result.filter(
        (task) => task.done === done
      );
    }

    if (req.query.search) {
      const search = req.query.search.toLowerCase();

      result = result.filter((task) =>
        task.text.toLowerCase().includes(search)
      );
    }

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// GET one task
router.get("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const task = data.tasks.find(
      (t) => t.id === id
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
});

// POST create task
router.post("/", async (req, res, next) => {
  try {
    const data = await loadData();

    const { text, projectId } = req.body;

    const error = validateTaskText(text);

    if (error) {
      return res.status(400).json({
        error
      });
    }

    const project = data.projects.find(
      (p) => p.id === Number(projectId)
    );

    if (!project) {
      return res.status(400).json({
        error: "Project not found"
      });
    }

    const newTask = {
      id: data.nextTaskId++,
      text: text.trim(),
      done: false,
      projectId: Number(projectId)
    };

    data.tasks.push(newTask);

    await saveData(data);

    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// PATCH task
router.patch("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const task = data.tasks.find(
      (t) => t.id === id
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    const { text, done, projectId } = req.body;

    if ("text" in req.body) {
      const error = validateTaskText(text);

      if (error) {
        return res.status(400).json({
          error
        });
      }

      task.text = text.trim();
    }

    if ("done" in req.body) {
      if (typeof done !== "boolean") {
        return res.status(400).json({
          error: "done must be true or false"
        });
      }

      task.done = done;
    }

    if ("projectId" in req.body) {
      const project = data.projects.find(
        (p) => p.id === Number(projectId)
      );

      if (!project) {
        return res.status(400).json({
          error: "Project not found"
        });
      }

      task.projectId = Number(projectId);
    }

    await saveData(data);

    res.json(task);
  } catch (err) {
    next(err);
  }
});

// DELETE task
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const index = data.tasks.findIndex(
      (t) => t.id === id
    );

    if (index === -1) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    data.tasks.splice(index, 1);

    await saveData(data);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// PUT replace task
router.put("/:id", async (req, res, next) => {
  try {
    const data = await loadData();

    const id = Number(req.params.id);

    const task = data.tasks.find(
      (t) => t.id === id
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found"
      });
    }

    const { text, done, projectId } = req.body;

    const error = validateTaskText(text);

    if (error || typeof done !== "boolean") {
      return res.status(400).json({
        error: error || "done must be true or false"
      });
    }

    const project = data.projects.find(
      (p) => p.id === Number(projectId)
    );

    if (!project) {
      return res.status(400).json({
        error: "Project not found"
      });
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