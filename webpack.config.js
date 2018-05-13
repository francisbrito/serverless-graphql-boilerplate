const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-extraneous-dependencies
const slsw = require('serverless-webpack');

module.exports = {
  devtool: "source-map",
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.js$/,
        use: [
          'imports-loader?graphql',
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { targets: { node: '6.10' } }]],
            },
          },
        ],
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
