module.exports = async function(element, value) {
  const attrValue = await element.attr('value');
  if (attrValue === value) {
    return {
      message: () =>
        `
${this.utils.matcherHint('.not.toHaveValue', 'element', 'value')}
Expected element ${element.selector} to not have value:
  ${this.utils.printExpected(value)}
Received:
  ${this.utils.printReceived(attrValue)}`,
      pass: true,
    };
  }
  return {
    message: () =>
      `
${this.utils.matcherHint('.toHaveAttr', 'element', 'attribute', { secondArgument: 'value' })}
Expected element ${element.selector} to have attribute:
  ${this.utils.printExpected(value)}
Received:
  ${this.utils.printReceived(attrValue)}`,
    pass: false,
  };
}
