  var assert = require('chai').assert;
  var webdriver = require('selenium-webdriver');
  var test = require('selenium-webdriver/testing');


  test.describe('testing /foods.html', function() {
    var driver;
    this.timeout(10000);

    test.beforeEach(function() {
      driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    })

    test.afterEach(function() {
      driver.quit();
    })

    test.it('should allow me to add an idea', function(){

      driver.get('http://localhost:8080/webpack-dev-server/foods.html')

      var name = driver.findElement({css: '#food-name'})
      name.sendKeys('Abalone');
      console.log(name)

      var calories = driver.findElement({css: '#food-calories'})
      calories.sendKeys(1234)

      var add = driver.findElement({css: '#add-food-button'})
      add.click()
      driver.sleep(1000)

      var tableName = driver.findElement({css: '.text-center.name'})

      tableName[0].getText().then(function(textValue){
      assert.equal(textValue, 'Abalone')
    })

  })
});
