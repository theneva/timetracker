import path from 'path';
import express from 'express';

import api from './server/controllers';

const clientPath = path.join(__dirname, 'client-react', 'build');

const port = process.env.PORT || 8081;

const app = express();

app.use('/', express.static(clientPath));
app.use('/api', api);

app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log(`Listening on port ${port}`);
});

