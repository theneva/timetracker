import db from '../db.js';

export default db.model('Record', {
  task: String,
  minutes: Number,
});
