(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API')
        .service('GameServerProxy',['$q', '$http', function($q, $http){
            var me = this;
            me.ApiCall = function(req){
                console.log(req);
                var defered = $q.defer();
                $http(req).then(
                    function(response) {
                        defered.resolve(response.data);
                    }, function(response) {
                        defered.reject(response);
                    }
                );

                return defered.promise;
            };
    }]);
})();