const createButton = require('./button');
const createElement = require('./element');
const createInput = require('./input');

/**
 * Create a new object with result of fn as values
 * @param object
 * @param fn
 * @return {object}
 */
function mapValues(object, fn) {
  return Object.entries(object).reduce(
    (_entries, [key, value]) => ({ ..._entries, [key]: fn.apply(fn, [value]) }),
    {},
  );
}

module.exports = (page, { selectors: { buttons = {}, elements = {}, inputs = {} } = {} } = {}) => {
  return {
    buttons: mapValues(buttons, (selector) => createButton(page, selector)),
    elements: mapValues(elements, (selector) => createElement(page, selector)),
    inputs: mapValues(inputs, (selector) => createInput(page, selector)),
  };
};
