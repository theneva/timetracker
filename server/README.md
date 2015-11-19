# Timetracker server

Server for storing and accessing recorded activities.

The main file is `server.js`, which in turn requires database and web controllers.

## Endpoints

All endpoints are behind `/api`.

- `GET /records` gets a JSON list of all records.
- `POST /records` saves a new report if given a JSON representation of a record.
