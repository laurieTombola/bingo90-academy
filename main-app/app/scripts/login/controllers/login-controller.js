(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Login').
        controller('login',
        ['$scope', '$state', 'Authenticator', 'UserDetails', function ($scope, $state, auth, userDetails) {
            $scope.username = "";
            $scope.password = "";

            $scope.logIn = function () {
                auth.login($scope.username, $scope.password).then(
                    function (data) {
                        userDetails.data = data.payload.user;
                        $state.go('purchase');
                    },
                    function (response) {
                        //TODO invalid username / password stuff
                    });
            };
        }]);
})();