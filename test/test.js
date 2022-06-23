const {Builder, By,Key,util} = require("selenium-webdriver");

(async function bitbucketLogin() {
    // const binary = "/opt/firefox/firefox" // En caso de tener firefox en una ruta distinta a la que es por defecto cambiar esta variable
  
    let driver = await new Builder().forBrowser('firefox').setFirefoxOptions().build();  
    // let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().setBinary(binary)).build();   // En caso de una ruta diferente de firefox descomentar esta linea
    try {
      await driver.get('https://bitbucket.org/product/');
      await driver.findElement(By.name('email')).sendKeys('neftalimamanigarcia3@gmail.com');
      await driver.findElement(By.name('pass')).sendKeys('neftali1997@', Key.RETURN);
      await driver.sleep(5 * 1000)
    } finally {
      await driver.quit();
    }
  })();


