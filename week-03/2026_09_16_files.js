const fs = require("fs");
fs.writeFileSync("note.txt", "Seema was here");

const noteText = fs.readFileSync("note.txt", "utf8");
console.log(noteText);

const tasks = [
  {
    id: 1,
    text: "Study JSON",
    done: false,
  },
  {
    id: 2,
    text: "Practice JavaScript",
    done: false,
  },
  {
    id: 3,
    text: "Learn files",
    done: false,
  },
];

//const tasksText = JSON.stringify(tasks, null, 2);

//fs.writeFileSync("tasks.json", tasksText);

const tasksData = fs.readFileSync("tasks.json", "utf8");

const tasksFromFile = JSON.parse(tasksData);

tasksFromFile.forEach((task) => {
  console.log(task.text);
});

const tasksFileData = fs.readFileSync("tasks.json", "utf8");

const savedTasks = JSON.parse(tasksFileData);

savedTasks.push({
  id: savedTasks.length + 1,
  text: "Practice files",
  done: false,
});

const updatedTasksText = JSON.stringify(savedTasks, null, 2);

fs.writeFileSync("tasks.json", updatedTasksText);

function loadTasks() {
  if (!fs.existsSync("tasks.json")) {
    return [];
  }

  const tasksData = fs.readFileSync("tasks.json", "utf8");

  return JSON.parse(tasksData);
}

function saveTasks(tasks) {
  const tasksText = JSON.stringify(tasks, null, 2);

  fs.writeFileSync("tasks.json", tasksText);
}

const loadedTasks = loadTasks();

console.log(loadedTasks);

saveTasks(loadedTasks);

console.log("Tasks saved successfully");