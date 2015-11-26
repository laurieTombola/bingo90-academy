(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API')
        .service('ApiCaller', ['$q', '$http', 'Converter', 'UserDetails', 'RequestShaper',
            function ($q, $http, converter, userDetails, requestShaper) {
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

                me.login = function (username, password) {
                    var defered = $q.defer();
                    apiCall(requestShaper.makeLoginRequest(username, password)).then(
                        function (response) {
                            userDetails.data = converter.convertLoginData(response);
                            defered.resolve(userDetails.data);
                        }, function (response) {
                            defered.reject(response);
                        }
                    );
                    return defered.promise;
                };


            }]);
})();