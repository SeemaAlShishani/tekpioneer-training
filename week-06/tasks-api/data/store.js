const fs = require("fs/promises");
const path = require("path");

const dataFile = path.join(__dirname, "data.json");

async function loadData() {
  const content = await fs.readFile(dataFile, "utf8");
  return JSON.parse(content);
}

async function saveData(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf8");
}

module.exports = {
  loadData,
  saveData,
};
