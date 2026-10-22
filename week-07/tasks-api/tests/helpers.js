const pool = require("../data/db");

async function resetDb() {
  await pool.query("TRUNCATE tasks, projects, users RESTART IDENTITY CASCADE");

  await pool.query(
    "INSERT INTO projects (name) VALUES ('Project A'), ('Project B')",
  );

  await pool.query(`
    INSERT INTO tasks (text, done, project_id) VALUES
    ('Task 1', false, 1),
    ('Task 2', true, 1),
    ('Task 3', false, 2)
  `);
}

module.exports = { resetDb };
