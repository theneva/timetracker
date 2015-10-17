'use strict';

var readline = require('readline');
var request = require('superagent');
var api = 'http://localhost:1111/records';

var io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var tasks = [];

loop();

function loop() {
    what(task => time(minutes => {
        store(task, minutes);
        loop();
    }));
};

function what(next) {
    io.question('What did you do? ', task => {
        if (!task) {
            console.log('That is not a valid task.');
            return what(next);
        } else {
            next(task);
        }
    });
}

function time(next) {
    io.question('How long did it take? ', answer => {
        let minutes = parseInt(answer);

        if (!minutes) {
            console.log('That is not a valid time.');
            return time(next);
        } else {
            next(minutes);
        }
    });
}

function store(task, minutes) {
    var record = {
        task: task,
        minutes: minutes
    };
    
    request.post(api)
        .send(record)
        .set('Content-Type', 'application/json')
        .end((err, res) => print());
}

function print() {
    request.get(api)
        .end((err, records) => console.log('Curreent records:', records.body));
}

