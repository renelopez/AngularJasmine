(function(){
    angular
        .module('app')
        .factory('airConditionerDataService', airConditionerDataService);

    //airConditionerDataService.$inject = [''];

    /* @ngInject */
    function airConditionerDataService() {
        var service = {
            getAirConditioners: getAirConditioners
        };

        return service;

        ////////////////

        function getAirConditioners() {
            return [
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
                ];
        }
    }
})();

