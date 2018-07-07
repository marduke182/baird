module.exports = (page, selector) => page.$(selector).then(elem => elem !== null);
