# hello-api

A simple Express server for Week 4 that listens and answers requests.

## How to run:
1. npm install
2. npm run dev
3. Open http://localhost:3000

## Routes & Status Codes:

- GET / : Welcoming message (200)
- GET /about : Info about me (200)
- GET /greet/:name : Greets by name (200)
- GET /square/:n : Calculates square (200 on success, 400 on invalid input)
- GET /repeat : Repeats a word (200 on success, 400 on missing or invalid params)
- GET /tasks : Returns all tasks (200)
- GET /tasks/stats : Returns tasks count and stats (200)
- GET /tasks/:id : Returns one task by id (200 on success, 404 if not found)
- POST /tasks : Adds a task with { "text": "task text" } (201 on success, 400 on empty/invalid text)
- DELETE /tasks/:id : Deletes a task by id (200 on success, 404 if not found)