module.exports = function(server, request) {
  const pass = server.requestWasMade(request);
  if (pass) {
    return {
      message: () =>
        `
${this.utils.matcherHint('.not.serverToBeCalledWith', 'server', 'request')}

Expected server to not be called, but it was called:
${this.utils.printExpected(server.requestReceived)}
Received:
${this.utils.printReceived(request)}
`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `
${this.utils.matcherHint('.serverToBeCalledWith', 'server', 'request')}

Expected server to be called, but it was no called:
${this.utils.printExpected(server.requestReceived)}
Received:
${this.utils.printReceived(request)}`,
      pass: false,
    };
  }
};
