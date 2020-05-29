const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const destination = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: `${src}/index.ts`,
  devtool: false,
  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: `${src}/../appsscript.json`, to: destination },
      ]
    }),
    new GasPlugin(),
  ],
};
