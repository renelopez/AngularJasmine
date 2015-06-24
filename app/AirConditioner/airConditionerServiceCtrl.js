angular
    .module('app')
    .controller('airConditionerServiceCtrl', airConditionerServiceCtrl);

airConditionerCtrl.$inject = ['$location','airConditionerDataService'];

/* @ngInject */
function airConditionerServiceCtrl($location,airConditionerDataService) {
    /* jshint validthis: true */
    var vm = this;
    vm.airConditioners=[];
    vm.getWorkingAirConditionersLength=getWorkingAirConditionersLength;
    vm.navigateToDetails=navigateToDetails;

    activate();

    ////////////////

    function activate() {
        vm.airConditioners=airConditionerDataService.getAirConditioners();
    }

    function getWorkingAirConditionersLength(){
        return vm.airConditioners.reduce(function(accum,currentValue){
            if (currentValue.isWorking) accum++;
            return accum;
        },0)
    }

    function navigateToDetails(user){
        if(user){
            $location.url('/user/'+user.id);
        }
    }
}