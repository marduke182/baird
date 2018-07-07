'use strict';
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const paths = require('../../config/paths');

module.exports = (resolve, rootDir, srcRoots) => {
  // Use this instead of `paths.testsSetup` to avoid putting
  // an absolute filename into configuration after ejecting.
  const setupTestsFile = fs.existsSync(paths.testsSetup)
    ? '<rootDir>src//setupTests.js'
    : undefined;

  const toRelRootDir = f => '<rootDir>' + path.relative(rootDir || '', f);

  // TODO: I don't know if it's safe or not to just use / as path separator
  // in Jest configs. We need help from somebody with Windows to determine this.
  const config = {
    setupFiles: [],
    setupTestFrameworkScriptFile: setupTestsFile,
    modulePathIgnorePatterns: [setupTestsFile],
    testMatch: [
      '**/*.test.{js,mjs}',
    ],
    // where to search for files/tests
    roots: srcRoots.map(toRelRootDir),
    globalSetup: `${resolve('config/jest/globalSetup.js')}`,
    globalTeardown: `${resolve('config/jest/teardown.js')}`,
    testEnvironment: `${resolve('config/jest/NodeEnvironment.js')}`,
    transform: {
      '^.+\\.(js|jsx|mjs)$': resolve('config/jest/babelTransform.js'),
    },
    moduleFileExtensions: [
      'web.js',
      'js',
      'json',
      'node',
      'mjs',
    ],
  };
  if (rootDir) {
    config.rootDir = rootDir;
  }

  return config;
};
