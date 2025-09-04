const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("React App UI Test", function () {
  this.timeout(10000);
  let driver;

  before(function () {
    driver = new Builder().forBrowser("chrome").build();
  });

  after(function () {
    driver.quit();
  });

  it("should load the homepage and display React text", async function () {
    await driver.get("http://localhost:3000");
    const link = await driver.wait(
      until.elementLocated(By.css(".App-link")),
      10000
    );
    //const title = await driver.findElement(By.css("p")).getText();
    const linkText = await link.getText();
    expect(linkText).to.include("Learn React");
    //expect(title).to.include("React");
  });
});
