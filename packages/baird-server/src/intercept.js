const Url = require('url');
const QueryString = require('querystring');

module.exports = async (page, server)  => {
  await page.setRequestInterception(true);
  page.on('request', function(request) {
    const url = new Url.URL(request.url());
    const method = request.method();
    const body = request.postData();

    const response = server.handle({
      host: url.origin,
      path: url.pathname,
      query: QueryString.parse(url.query),
      method,
      body,
    });

    if (response === server.continue) {
      return request.continue();
    }

    if (response === server.abort) {
      return request.abort();
    }
    if (typeof response.body === 'object') {
      response.body = JSON.stringify(body);
    }
    return request.respond(response);
  });
};
