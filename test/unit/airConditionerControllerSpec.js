describe('Air Conditioner Controller Suite',function(){
   var airConditionalController;
   var $scope;

   beforeEach(module('app'));

   beforeEach(inject(function($controller,$rootScope){
       $scope=$rootScope.$new();
       airConditionalController=$controller('airConditionerCtrl',{$scope:$scope});
   }));

   it('should have an existing air conditiener controller',function(){
      expect(airConditionalController).toBeDefined();
   });

    it('should have one air conditioner working after activation',function(){
        expect(airConditionalController.getWorkingAirConditionersLength()).toBe(1);
    });

});
