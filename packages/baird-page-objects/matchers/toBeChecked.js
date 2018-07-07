module.exports = async function(element) {
  const checked = await element.checked();
  if (checked) {
    return {
      message: () =>
        `
${this.utils.matcherHint('.not.toBeChecked', 'element')}

Expected ${element.selector} not to be checked but it was.`,
      pass: true,
    };
  }
  return {
    message: () =>
      `
${this.utils.matcherHint('.toBeChecked', 'element')}

Expected ${element.selector} to be checked but it wasn't.`,
    pass: false,
  };
}
