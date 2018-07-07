const callIfExist = require('./callIfExist');

module.exports = callIfExist(
  async (page, selector) => await page.$eval(selector, input => (input.value = '')),
);
