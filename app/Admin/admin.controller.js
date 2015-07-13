(function(){

    angular
        .module('app')
        .controller('adminController', adminController);

//airConditionerCtrl.$inject = [''];

    /* @ngInject */
    function adminController() {
        /* jshint validthis: true */
        var vm = this;
        vm.alguienes=[];
        activate();

        ////////////////

        function activate() {
            vm.alguienes=[
                {
                    name:'Orlando',
                    nickname:'Orly',
                    company:'Unosquare',
                    technology:'Java'
                },
                {
                    name:'Bernardo',
                    nickname:'Berny',
                    company:'Unosquare',
                    technology:'Ruby'
                },
                {
                    name:'Jose Luis',
                    nickname:'Popeye',
                    company:'Unosquare',
                    technology:'Python'
                },
                {
                    name:'Vic',
                    nickname:'Sabrosiki',
                    company:'Unosquare',
                    technology:'La que te viene manejando es...'
                }
            ]
        }
    }
})();