# tasks-api (PostgreSQL Edition)

A robust REST API with PostgreSQL database persistence, connection pooling, and full CRUD for tasks and projects.

## Setup Instructions

1. Create database:
   Create a PostgreSQL database named `training`.

2. Run schema & seed:
   Run `db/schema.sql` to build the tables.
   Run `db/seed.sql` to populate initial data.

3. Configure environment:
   Copy `.env.example` to `.env` and fill in your database credentials:
   ```bash
   cp .env.example .env
   ```
