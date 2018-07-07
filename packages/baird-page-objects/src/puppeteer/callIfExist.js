const exist = require('./exist');

module.exports = (fn) => async (page, selector, ...args) => {
  if (await exist(page,selector)) {
    return fn.apply(fn, [ page, selector, ...args]);
  }
  return null;
};
