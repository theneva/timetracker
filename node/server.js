'use strict';

const morgan = require('morgan');
const db = require('mongoose');
const express = require('express');
const app = express();
const port = 1111;

app.use(require('body-parser').json());
app.use(require('cors')());
app.use(morgan('dev'));

const mongoUrl = 'mongodb://localhost/timetracker';
db.connect(mongoUrl, () => console.log('Connected', mongoUrl));

const Record = db.model('Record', {
    task: String,
    minutes: Number
});

app.get('/records', (req, res) => Record.find((err, records) => res.json(records)));

app.post('/records', (req, res) => {
    if (!req.body || !req.body.task || !req.body.minutes) {
        return res.status(400).send('Record must contain {task, minutes}');
    }

    const record = new Record(req.body);
    record.save((err, saved) => res.status(201).send(saved));
});

app.listen(port, () => console.log('App listening on port', port));

