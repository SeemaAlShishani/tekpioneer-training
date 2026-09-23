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



app.listen(3000, () => {
  console.log("Server started on port 3000");
});
