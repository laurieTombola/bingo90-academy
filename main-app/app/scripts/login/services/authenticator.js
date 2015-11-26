(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API').
        service('Authenticator', ['$state', '$q', 'ApiCaller', 'Converter', function ($state, $q, api, converter) {
            var me = this;

            me.sessionDetails = {};

            me.login = function (username, password) {
                var defered = $q.defer();
                api.apiCall(makeLoginRequest(username, password)).then(
                    function (response) {
                        me.sessionDetails.data = converter.convertLoginData(response);
                        defered.resolve(me.sessionDetails.data);
                    }, function (response) {
                        defered.reject(response);
                    }
                );
                return defered.promise;
            };

            me.logout = function (username, password) {
                var defered = $q.defer();
                api.apiCall(makeLogoutRequest(username, password)).then(
                    function (response) {
                        me.sessionDetails.data = {};
                        defered.resolve(response);
                    }, function (response) {
                        defered.reject(response);
                    }
                );
                return defered.promise;
            };

            me.authenticate = function () {
                return me.sessionDetails != {};
            };

            var makeLoginRequest = function (username, password) {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {"username": username, "password": password}
                };
            };

            var makeLogoutRequest = function () {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/logout',
                    headers: {
                        'x-token': userDetails.data.token,
                        'Content-Type': 'application/json'
                    }
                };
            };
        }]);
})();