# Baird

 Baird is a set of tools to write acceptance tests on the web. Following TDD best practices, you must start writing your acceptance before any tests. 

But in web development, there is no easy way to write them. You are creating user behavioral, the only way to test it is with E2E testing.

 Normal E2E testing has many problems, one of them is the dependency on a backend server. Trying to set up the server with the right state in order to be ready to do the test is complex.

Baird is a proposal for E2E testing with server stubbing.

## Usage

Install Baird

```bash
npm i -S baird baird-server baird-page-objects
```

Create a jest.config.js
```javascript
module.exports = {
  ...require('baird/jestConfig'),
};
```

Setup your server stub

```javascript
// src/setupTests.js
const BairdServer = require('baird-server');
require('baird-server/matchers');
require('baird-page-objects/matchers');

beforeAll(async () => {
  global.page = await global.browser.newPage();
  global.server = new BairdServer({ baseUrl: global.host });

  await BairdServer.intercept(global.page, global.server);
});

afterAll(async () => {
  if (!global.debug) {
    await page.close();
  }
});
```
Create your page objects

```javascript
//src/po
import { page as createPage } from 'baird-page-objects';

const urls = {
  register: host => `${host}/register`,
};

const selectors = {
  buttons: {
    createAccount: '[data-test-id="register-button"]',
  },
  inputs: {
    email: 'input[data-test-id="register-email"]',
    password: 'input[data-test-id="register-password"]',
  }
};

export default (page, host) => ({
  ...createPage(page, selectors),
  async go() { await this.page.goto(urls.register(host)) ;}
})
```

Write your test

```javascript
//src/user.test.js
let registerPage;
beforeEach(async () => {
  registerPage = createRegisterPage(global.page, global.host);
  await registerPage.go();
});

// Verify if the inputs in register page exist
test('should have username and password inputs', async () => {
  await expect(registerPage.inputs.email).toExist();
  await expect(registerPage.inputs.password).toExist();
});
```
