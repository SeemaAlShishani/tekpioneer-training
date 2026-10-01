const express = require("express");
const tasks = require("./tasks");

const app = express();

app.use(express.json());

const PORT = 3000;

let nextId = 4;

function validateTaskText(text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Task text is required";
  }

  return null;
}

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

app.post("/tasks", (req, res) => {
  const { text } = req.body;

  const error = validateTaskText(text);

  if (error) {
    return res.status(400).json({ error });
  }

  const newTask = {
    id: nextId++,
    text: text.trim(),
    done: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.patch("/tasks/:id", (req, res) => {
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
        error: "done must be true or false",
      });
    }

    task.done = done;
  }

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { text, done } = req.body;

  const error = validateTaskText(text);

  if (error || typeof done !== "boolean") {
    return res.status(400).json({
      error: error || "done must be true or false",
    });
  }

  task.text = text.trim();
  task.done = done;

  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
