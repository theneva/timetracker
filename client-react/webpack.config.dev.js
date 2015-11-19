import path from 'path';
import webpack from 'webpack';

const srcDirectory = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(srcDirectory, 'main.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: srcDirectory,
      },
    ],
  },
};

