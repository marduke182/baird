const { exist } = require('./puppeteer');

module.exports = function input(page, selector) {
  return {
    selector,
    exist: () => exist(page, selector),
    visible: () => require('./puppeteer/visible')(page, selector),
    clear: () => require('./puppeteer/clear')(page, selector),
    attr: () => require('./puppeteer/attr')(page, selector),
    id: () => require('./puppeteer/attr')(page, selector, 'id'),
  };
};
