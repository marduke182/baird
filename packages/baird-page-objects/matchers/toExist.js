module.exports = async function(element) {
  const exist = await element.exist();
  if (exist) {
    return {
      message: () =>
        `
${this.utils.matcherHint('.not.toExist', 'element')}
Expected ${element.selector} not to exist.`,
      pass: true,
    };
  }
  return {
    message: () =>
      `
${this.utils.matcherHint('.toExist', 'element')}
Expected ${element.selector} to exist`,
    pass: false,
  };
}
