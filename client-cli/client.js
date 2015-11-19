import readline from 'readline';
import request from 'superagent';

const api = process.env.API_URL || 'http://localhost:8081/records';

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function what(next) {
  io.question('What did you do? ', task => {
    if (!task) {
      console.log('That is not a valid task.');
      return what(next);
    }

    next(task);
  });
}

function time(next) {
  io.question('How long did it take? ', answer => {
    const minutes = parseInt(answer, 10);

    if (!minutes) {
      console.log('That is not a valid time.');
      return time(next);
    }

    next(minutes);
  });
}

function print() {
  request.get(api)
    .end((err, records) => console.log('Current records:', records.body));
}

function store(task, minutes) {
  const record = {
    task: task,
    minutes: minutes,
  };

  request.post(api)
    .send(record)
    .set('Content-Type', 'application/json')
    .end(() => print());
}

function loop() {
  what(task => time(minutes => {
    store(task, minutes);
    loop();
  }));
}

// Run the program.
loop();
