angular
    .module('app')
    .controller('airConditionerServiceCtrl', airConditionerServiceCtrl);

airConditionerCtrl.$inject = ['airConditionerDataService'];

/* @ngInject */
function airConditionerServiceCtrl(airConditionerDataService) {
    /* jshint validthis: true */
    var vm = this;
    vm.airConditioners=[];
    vm.getWorkingAirConditionersLength=getWorkingAirConditionersLength;

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
}