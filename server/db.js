import db from 'mongoose';

const mongoUrl = 'mongodb://localhost/timetracker';
db.connect(mongoUrl, () => console.log('Connected', mongoUrl));

export default db;
