-- Drop tables if they already exist
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS projects;

-- Create projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Create tasks table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT false,
    project_id INTEGER REFERENCES projects(id)
);