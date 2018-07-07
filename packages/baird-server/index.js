const Server = require('./src/Server');
const intercept = require('./src/intercept');

module.exports = Server;

module.exports.intercept = intercept;
