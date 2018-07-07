const toHaveValue = require('./toHaveValue');
const toHaveAttr = require('./toHaveAttr');
const toBeChecked = require('./toBeChecked');
const toExist = require('./toExist');

expect.extend({
  toExist,
  toBeChecked,
  toHaveAttr,
  toHaveValue,
});
