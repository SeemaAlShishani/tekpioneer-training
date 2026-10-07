-- Mark two tasks as done
UPDATE tasks
SET done = true
WHERE id IN (3, 6);

-- Rename one task
UPDATE tasks
SET text = 'Practice JSON and SQL'
WHERE id = 4;

-- Delete one task
DELETE FROM tasks
WHERE id = 8;

-- Create students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    grade INTEGER CHECK (grade BETWEEN 0 AND 100)
);

-- Insert 8 students
INSERT INTO students (name, grade) VALUES
('Ahmad', 95),
('Sara', 88),
('Omar', 76),
('Lina', 92),
('Yazan', 65),
('Dana', 58),
('Sami', 43),
('Noor', 81);

-- Count students
SELECT COUNT(*) FROM students;

-- Average grade
SELECT AVG(grade) FROM students;

-- Highest grade
SELECT MAX(grade) FROM students;

-- Lowest grade
SELECT MIN(grade) FROM students;

-- Count passed students
SELECT COUNT(*)
FROM students
WHERE grade >= 50;

-- Test CHECK constraint
INSERT INTO students (name, grade)
VALUES ('Test', 120);

-- Count tasks by done status
SELECT done, COUNT(*)
FROM tasks
GROUP BY done;

-- Convert grades to words
SELECT
    name,
    grade,
    CASE
        WHEN grade >= 90 THEN 'Excellent'
        WHEN grade >= 80 THEN 'Very Good'
        WHEN grade >= 70 THEN 'Good'
        WHEN grade >= 50 THEN 'Pass'
        ELSE 'Fail'
    END AS grade_word
FROM students;