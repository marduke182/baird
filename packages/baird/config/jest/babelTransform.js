// @remove-on-eject-begin
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [[require.resolve('babel-preset-env'), { "targets": { node: "8" },  "modules": "commonjs" }]],
  plugins: [require.resolve("babel-plugin-dynamic-import-node")]
});
