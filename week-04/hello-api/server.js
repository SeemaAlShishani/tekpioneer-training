const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Seema's server - Week 4");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Seema",
    role: "trainee software engineer",
    week: 4,
  });
});

app.get("/greet/:name", (req, res) => {
  res.json({
    message: `Hello, ${req.params.name}!`
  });
});

app.get("/square/:n", (req, res) => {
  const number = Number(req.params.n);

  if (Number.isNaN(number)) {
    return res.json({
      error: "Please provide a valid number."
    });
  }

  res.json({
    number: number,
    square: number * number
  });
});

app.get("/repeat", (req, res) => {
  const word = req.query.word;
  const times = Number(req.query.times);

  res.json({
    result: word.repeat(times)
  });
});

const tasks = [
  {
    id: 1,
    text: "Learn Express",
    done: true
  },
  {
    id: 2,
    text: "Practice GET routes",
    done: false
  },
  {
    id: 3,
    text: "Learn Postman",
    done: false
  }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/stats", (req, res) => {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  const remaining = total - done;

  res.json({
    total: total,
    done: done,
    remaining: remaining
  });
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
