/* global __dirname */
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var resolvPath = function(componentPath) {
  return path.join(__dirname, componentPath);
};

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './test/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'tests.js'
  },
  externals: nodeModules,
  resolve: {
    alias: {
      src: resolvPath('./src')
    }
  }
}