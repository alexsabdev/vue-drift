const path = require('path');
const merge = require('webpack-merge');

const commonConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = [
  merge(commonConfig, {
    mode: 'production',
    output: {
      filename: 'vue-drift.min.js',
    },
  }),
  merge(commonConfig, {
    mode: 'development',
    output: {
      filename: 'vue-drift.js',
    },
  }),
];
