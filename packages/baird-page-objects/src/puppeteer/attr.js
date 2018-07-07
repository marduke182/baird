const callIfExist = require('./callIfExist');

const stringToFunctionToString = string => {
  const NoopFunction = function NoopFunction() {};
  NoopFunction.prototype.toString = function CustomString() {
    return string;
  };
  return new NoopFunction();
};

module.exports = callIfExist(async (page, selector, subAttr) =>
  page.$eval(selector, stringToFunctionToString(`el => el.${subAttr}`)),
);
