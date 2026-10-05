# Tasks API

## Week 5 Day 3

### Project deletion policy

A project cannot be deleted if it still has tasks.

The API returns:

- `409 Conflict` when the project has tasks.
- `204 No Content` when the project has no tasks.

### Persistence

Projects and tasks are stored in `data/data.json`.

The API uses async/await with `fs/promises` to load and save the data.

Data survives after restarting the server.