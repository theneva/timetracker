import express from 'express';

import controllers from './controllers.js';

const port = 1111;

const app = express();

// Middleware goes here.
app.use('/api', controllers);

// Ready for action!
app.listen(port, () => console.log('App listening on port', port));
