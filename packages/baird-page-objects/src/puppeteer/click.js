const callIfExist = require('./callIfExist');

module.exports = callIfExist(
  async (page, selector) => await page.click(selector),
);
