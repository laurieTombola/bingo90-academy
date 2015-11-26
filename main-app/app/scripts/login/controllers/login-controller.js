(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Login').
        controller('login',
        ['$scope', '$state', 'Authenticator', function ($scope, $state, auth) {
            $scope.username = "";
            $scope.password = "";

            $scope.logIn = function () {
                auth.login($scope.username, $scope.password).then(
                    function (data) {
                        $state.go('purchase');
                    },
                    function (response) {
                        //TODO invalid username / password stuff
                    });
            };
        }]);
})();