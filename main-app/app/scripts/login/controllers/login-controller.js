(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Login').
        controller('login', ['$scope','GameServerProxy', 'RequestShaper', 'UserDetails', function($scope, proxy, dataShaper, userDetails){
            $scope.username = "";
            $scope.password = "";

            $scope.logIn = function(){
                proxy.ApiCall(dataShaper.makeLoginRequest($scope.username, $scope.password)).then(
                    function(data){
                        userDetails = data.payload.user;
                    },
                    function(response){

                    });
            };
        }]);
})();