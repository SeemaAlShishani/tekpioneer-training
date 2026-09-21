const fs = require("fs");

const command = process.argv[2];
const text = process.argv[3];
const taskNumber = Number(process.argv[3]);

function loadTasks() {
  if (!fs.existsSync("tasks.json")) {
    return [];
  }

  const tasksData = fs.readFileSync("tasks.json", "utf8");

  return JSON.parse(tasksData);
}

if (command === "add") {
  const tasks = loadTasks();

  if (!text) {
    console.log("Please provide a task text.");
    return;
  }

  tasks.push({
    id: tasks.length + 1,
    text: text,
    done: false,
  });

  const tasksText = JSON.stringify(tasks, null, 2);

  fs.writeFileSync("tasks.json", tasksText);

  console.log(`Added: ${text}`);
} else if (command === "list") {
  const tasks = loadTasks();

  tasks.forEach((task) => {
    const mark = task.done ? "[x]" : "[ ]";

    console.log(`${task.id}. ${mark} ${task.text}`);
  });

  const doneCount = tasks.filter((task) => task.done).length;

  console.log(`${tasks.length} tasks · ${doneCount} done`);
} else if (command === "done") {
  const tasks = loadTasks();
  const task = tasks[taskNumber - 1];

  if (!task) {
    console.log("Task not found. Please enter a valid task number.");
  } else {
    task.done = true;

    const tasksText = JSON.stringify(tasks, null, 2);

    fs.writeFileSync("tasks.json", tasksText);

    console.log(`Done: ${task.text}`);
  }
} else if (command === "delete") {
  const tasks = loadTasks();
  const task = tasks[taskNumber - 1];

  if (!task) {
    console.log("Task not found. Please enter a valid task number.");
  } else {
    tasks.splice(taskNumber - 1, 1);

    tasks.forEach((task, index) => {
      task.id = index + 1;
    });

    const tasksText = JSON.stringify(tasks, null, 2);

    fs.writeFileSync("tasks.json", tasksText);

    console.log(`Deleted: ${task.text}`);
  }
} else {
  console.log("Use: add, list, done, or delete");
}
