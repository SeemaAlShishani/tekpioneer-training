# hello-api

A simple Express server for Week 4 that listens and answers requests.

## How to run:
1. npm install
2. node --watch server.js
3. Open http://localhost:3000

## Routes:

- GET / : Welcoming message
- GET /about : Info about me
- GET /greet/:name : Greets by name (Example: /greet/Seema)
- GET /square/:n : Calculates square of a number (Example: /square/5)
- GET /repeat : Repeats a word (Example: /repeat?word=hi&times=3)
- GET /tasks : Returns all tasks
- GET /tasks/stats : Returns tasks count and stats
- GET /tasks/:id : Returns one task by id (Example: /tasks/1)
- POST /tasks : Adds a new task with JSON body: { "text": "my task" }
- DELETE /tasks/:id : Deletes a task by id (Example: /tasks/1)