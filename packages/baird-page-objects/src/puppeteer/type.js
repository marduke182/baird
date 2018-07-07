const callIfExist = require('./callIfExist');

module.exports = callIfExist(
  async (page, selector, value) => await page.type(selector, value),
);
