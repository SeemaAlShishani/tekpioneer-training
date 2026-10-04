const express = require("express");
const router = express.Router();

const data = require("../data/tasks");
const { tasks } = data;

const { validateTaskText } = require("../validation");

router.get("/", (req, res) => {
  let result = tasks;

  if (req.query.done !== undefined) {
    const done = req.query.done === "true";

    result = result.filter((task) => task.done === done);
  }

  if (req.query.search) {
    const search = req.query.search.toLowerCase();

    result = result.filter((task) =>
      task.text.toLowerCase().includes(search)
    );
  }

  res.json(result);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

router.post("/", (req, res) => {
  const { text } = req.body;

  const error = validateTaskText(text);

  if (error) {
    return res.status(400).json({ error });
  }

  const newTask = {
    id: data.nextId++,
    text: text.trim(),
    done: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { text, done } = req.body;

  if ("text" in req.body) {
    const error = validateTaskText(text);

    if (error) {
      return res.status(400).json({ error });
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

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { text, done } = req.body;

  const error = validateTaskText(text);

  if (error || typeof done !== "boolean") {
    return res.status(400).json({
      error: error || "done must be true or false"
    });
  }

  task.text = text.trim();
  task.done = done;

  res.json(task);
});

module.exports = router;