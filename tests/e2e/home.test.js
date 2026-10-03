const { Builder, By } = require('selenium-webdriver');

describe('UI Test - Home Page', () => {
  let driver;

  beforeAll(async () => {
    const gridUrl = process.env.SELENIUM_REMOTE_URL || 'http://localhost:4444/wd/hub';
    driver = await new Builder()
      .forBrowser('chrome')
      .usingServer(gridUrl)
      .build();
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('verifies frontend header title', async () => {
    const appUrl = process.env.APP_URL || 'http://jenkins:3000';
    await driver.get(appUrl);
    const headerText = await driver.findElement(By.tagName('h1')).getText();
    expect(headerText).toBe('Task Tracker API');
  }, 30000);
});