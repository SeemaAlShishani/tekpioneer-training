-- Every task with its project name
SELECT
    tasks.id,
    tasks.text,
    tasks.done,
    projects.name AS project_name
FROM tasks
JOIN projects
ON tasks.project_id = projects.id;
-- Tasks of one project
SELECT
    tasks.id,
    tasks.text,
    tasks.done
FROM tasks
JOIN projects
ON tasks.project_id = projects.id
WHERE projects.id = 1;
-- Task count per project
SELECT
    projects.name,
    COUNT(tasks.id) AS task_count
FROM projects
LEFT JOIN tasks
ON projects.id = tasks.project_id
GROUP BY projects.id, projects.name;
-- Projects with no tasks
SELECT
    projects.id,
    projects.name
FROM projects
LEFT JOIN tasks
ON projects.id = tasks.project_id
WHERE tasks.id IS NULL;
-- Percentage done per project
SELECT
    projects.name,
    ROUND(
        100.0 * SUM(
            CASE WHEN tasks.done = true THEN 1 ELSE 0 END
        ) / COUNT(tasks.id),
        2
    ) AS percentage_done
FROM projects
JOIN tasks
ON projects.id = tasks.project_id
GROUP BY projects.id, projects.name;
-- Project with the most open tasks
SELECT
    projects.name,
    COUNT(tasks.id) AS open_tasks
FROM projects
JOIN tasks
ON projects.id = tasks.project_id
WHERE tasks.done = false
GROUP BY projects.id, projects.name
ORDER BY open_tasks DESC
LIMIT 1;