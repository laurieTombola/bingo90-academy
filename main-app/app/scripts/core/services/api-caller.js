(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API')
        .service('ApiCaller', ['$q', '$http', 'Converter', 'UserDetails', 'RequestShaper',
            function ($q, $http) {
                var me = this;
                me.apiCall = function (req) {
                    var defered = $q.defer();
                    $http(req).then(
                        function (response) {
                            defered.resolve(response.data);
                        }, function (response) {
                            defered.reject(response);
                        }
                    );
                    return defered.promise;
                };
            }]);
})();