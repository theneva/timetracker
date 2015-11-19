import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.dev.js';
import api from '../server/controllers.js';

const port = process.env.PORT || 3000;

const app = express();

// Load the server endpoints
app.use('/api', api);

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('*', ({res}) => res.sendFile(path.join(__dirname, 'build')));

app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on port', port);
});
