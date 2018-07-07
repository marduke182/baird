module.exports = function input(page, selector) {
  return {
    ...(require('./element')(page,selector)),

    // Button custom
    text: () => require('./puppeteer/attr')(page, selector, 'innerText'),
    click: () => require('./puppeteer/click')(page, selector),

  };
};
