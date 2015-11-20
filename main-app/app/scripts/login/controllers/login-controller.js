(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Login').
        controller('login', ['$scope', '$state', 'GameServerProxy', 'RequestShaper', 'UserDetails', function($scope, $state, proxy, dataShaper, userDetails){
            $scope.username = "";
            $scope.password = "";

            $scope.logIn = function(){
                proxy.apiCall(dataShaper.makeLoginRequest($scope.username, $scope.password)).then(
                    function(data){
                        $state.go('purchase');
                    },
                    function(response){

                    });
            };
        }]);
})();

//YOU DID NOT SET UP THE PURCHASE MODULE! DICK WITT!!!!!