INSERT INTO projects (name) VALUES ('Project A'), ('Project B'), ('Project C');

INSERT INTO tasks (text, done, project_id) VALUES
('Task 1', false, 1),
('Task 2', true, 1),
('Task 3', false, 1),
('Task 4', true, 2),
('Task 5', false, 2),
('Task 6', false, 2),
('Task 7', true, 3),
('Task 8', false, 3),
('Task 9', true, 3),
('Task 10', false, 3);