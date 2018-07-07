module.exports = function input(page, selector) {
  return {
    ...(require('./element')(page,selector)),

    // Button custom
    type: (value) => require('./puppeteer/type')(page, selector, value),
    value: () => require('./puppeteer/attr')(page, selector, 'value'),
  };
};
