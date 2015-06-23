angular
    .module('app')
    .controller('airConditionerCtrl', airConditionerCtrl);

//airConditionerCtrl.$inject = [''];

/* @ngInject */
function airConditionerCtrl() {
    /* jshint validthis: true */
    var vm = this;
    vm.airConditioners=[];
    vm.getWorkingAirConditionersLength=getWorkingAirConditionersLength;

    activate();

    ////////////////

    function activate() {
        vm.airConditioners=[
            {
                brand:'LG',
                description:'A powerful air conditioner',
                cost:'10000',
                isWorking:false
            },
            {
                brand:'Philips',
                description:'A great air conditioner',
                cost:'7000',
                isWorking:false
            },
            {
                brand:'General Electric',
                description:'A tiny air conditioner',
                cost:'3000',
                isWorking:true
            }
        ]
    }

    function getWorkingAirConditionersLength(){
        return vm.airConditioners.reduce(function(accum,currentValue){
            if (currentValue.isWorking) accum++;
            return accum;
        },0)
    }
}