# tasks-api

A modular REST API with full CRUD for tasks and projects, data persistence, and error handling.

## How to run
1. npm install
2. npm run dev
3. Server runs at http://localhost:3000

## API Routes & Status Codes

### Projects
- GET /projects : Returns all projects (200)
- GET /projects/:id : Returns one project (200, 404)
- GET /projects/:id/tasks : Returns tasks for a project (200, 404)
- POST /projects : Creates a project (201, 400)
- PATCH /projects/:id : Updates a project (200, 400, 404)
- DELETE /projects/:id : Deletes a project (204, 404, 409 if has tasks)

### Tasks
- GET /tasks : Returns tasks with filters ?done=true&search=text (200, 400)
- GET /tasks/:id : Returns one task (200, 404)
- POST /tasks : Creates a task (201, 400)
- PATCH /tasks/:id : Updates task partially (200, 400, 404)
- PUT /tasks/:id : Replaces task completely (200, 400, 404)
- DELETE /tasks/:id : Deletes a task (204, 404)