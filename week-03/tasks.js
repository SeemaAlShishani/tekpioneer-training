const fs = require("fs");
const command = process.argv[2];
const text = process.argv[3];

function loadTasks() {
  if (!fs.existsSync("tasks.json")) {
    return [];
  }

  const tasksData = fs.readFileSync("tasks.json", "utf8");

  return JSON.parse(tasksData);
}

if (command === "add") {
  const tasks = loadTasks();
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
} else {
  console.log("Use: add or list");
}
