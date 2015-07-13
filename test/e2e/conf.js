exports.config={
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs:['./**/*.spec.js'],

    suites:{
      adminSuite:'./suites/admin/**/*.spec.js',
      airConditionerSuite:'./suites/airConditioner/**/*.spec.js',
      full:'./suites/**/*.spec.js'
    },

    onPrepare:function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    }

};