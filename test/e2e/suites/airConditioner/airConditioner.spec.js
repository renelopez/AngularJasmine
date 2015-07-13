
var AirConditionerPage=require('../../framework/pages/airConditioner.page');

describe('Air Conditioner List Tests',function(){

    var airConditionerPage=new AirConditionerPage();

    beforeEach(function(){
        browser.get('http://localhost:63342/AngularJasmine/index.html#/');
    });

    it('Should contain the Air Conditioner Title',function(){
        expect(airConditionerPage.header.getText()).toBe('Air Conditioners');
    });

    it('Should render the first element on the Air Conditioners List Correctly',function(){
        expect(airConditionerPage.firstBrand.getText()).toBe('LG');
    });

    it('Should check the correct item count',function(){
        expect(airConditionerPage.getItemCount()).toBe(3);
    });
});
