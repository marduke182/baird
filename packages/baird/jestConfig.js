'use strict';

const createJestConfig = require('./scripts/utils/createJestConfig');
const path = require('path');
const paths = require('./config/paths');

module.exports = createJestConfig(
  relativePath => path.resolve(__dirname, relativePath),
  path.resolve(paths.appSrc, '..'),
  paths.srcPaths
);
