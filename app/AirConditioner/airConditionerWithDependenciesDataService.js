(function(){
    angular
        .module('app')
        .factory('airConditionerWithDependenciesDataService', airConditionerWithDependenciesDataService);

    airConditionerWithDependenciesDataService.$inject = ['gitHubDataService'];

    /* @ngInject */
    function airConditionerWithDependenciesDataService(gitHubDataService) {
        var service = {
            getGitHubDataByUser: getGitHubDataByUser,
            save: save
        };

        return service;

        ////////////////

        function getGitHubDataByUser(user) {
            var userToSend=user+' Unosquare';
            return gitHubDataService.get(userToSend);
        }

        function save(user){
            gitHubDataService.save(user);
        }
    }
})();

