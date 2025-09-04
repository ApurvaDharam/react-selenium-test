const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("React App UI Test", function () {
  this.timeout(10000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("should load the homepage and display React text", async () => {
    await driver.get("http://localhost:3000");
    const title = await driver.findElement(By.css("h1")).getText();
    expect(title).to.include("React");
  });
});

