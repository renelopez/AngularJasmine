(function(){
    angular
        .module('app')
        .factory('gitHubDataService', gitHubDataService);

    gitHubDataService.$inject = ['$http'];

    /* @ngInject */
    function gitHubDataService($http) {
        var service = {
            get: get,
            save: save
        };

        return service;

        ////////////////

        function get(user) {
            return $http.get('https://api.github.com/users/'+user);
        }

        function save(user) {
            $http.post('https://api.github.com/users/renelopez',user);
        }


    }

})();


