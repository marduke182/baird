const puppeteer = require('puppeteer');
const NodeEnvironment = require('jest-environment-node');
const fs = require('fs');
const os = require('os');
const path = require('path');
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const wsEndpointDir = path.join(DIR, 'wsEndpoint');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    const wsEndpoint = fs.readFileSync(wsEndpointDir, 'utf8');
    if (!wsEndpoint) throw new Error('wsEndpoint not found');
    this.global.browser = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });
    this.global.debug = process.env.DEBUG;
    this.global.host = process.env.HOST;
  }
}
module.exports = PuppeteerEnvironment;
