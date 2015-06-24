describe('Air Conditioner Controller Suite',function(){
   var $controllerConstructor;
   var $scope;
   var mockAirConditionerDataService;

   beforeEach(module('app'));

   beforeEach(inject(function($controller,$rootScope){
       $scope=$rootScope.$new();
       mockAirConditionerDataService=sinon.stub({getAirConditioners:function(){}});
       $controllerConstructor=$controller;
   }));

    it('should have set the correct number of values into the scope',function(){
        var mockAirConditionersData=[1,2,3,4,5,2,2,32,323,2,2323,23,23,23,23,23,23,23,23,23];
        mockAirConditionerDataService.getAirConditioners.returns(mockAirConditionersData);
        var ctrl=$controllerConstructor('airConditionerServiceCtrl',{$scope:$scope,$location:{},airConditionerDataService:mockAirConditionerDataService});
        expect(ctrl.airConditioners).toBe(mockAirConditionersData);
    });

    it('should send the user to the correct page',function(){

        var user={id:23};
        var mockLocation=sinon.stub({url:function(){}});
        var ctrl=$controllerConstructor('airConditionerServiceCtrl',{$scope:$scope,$location:mockLocation,airConditionerDataService:mockAirConditionerDataService});
        ctrl.navigateToDetails(user);
        expect(mockLocation.url.calledWith('/user/23')).toBe(true);
    });

});
