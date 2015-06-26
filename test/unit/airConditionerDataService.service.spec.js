describe('Air Conditioner Data Service Tests',function(){


    beforeEach(module('app'));

    beforeEach(function(){
    });

    it('should check the correct length of airConditioners',inject(function(airConditionerDataService){
        expect(airConditionerDataService.getAirConditioners().length).toBeGreaterThan(0);
    }));

});
