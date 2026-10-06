-- 1. Create table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT false
);

-- 2. Insert 8 tasks
INSERT INTO tasks (text, done) VALUES
('Learn Express', true),
('Build Tasks API', true),
('Learn PostgreSQL', false),
('Practice JSON', false),
('Understand REST API', true),
('Practice SQL queries', false),
('Learn async await', true),
('Review database basics', false);

-- 3. Query all tasks
SELECT * FROM tasks;

-- 4. Query only done tasks
SELECT * FROM tasks WHERE done = true;

-- 5. Query tasks containing "json" (case-insensitive)
SELECT * FROM tasks WHERE text ILIKE '%json%';

-- 6. Query the newest 3 tasks
SELECT * FROM tasks ORDER BY id DESC LIMIT 3;

-- 7. Attempt to insert a task with no text (fails due to NOT NULL constraint)
-- INSERT INTO tasks (text, done) VALUES (NULL, false);