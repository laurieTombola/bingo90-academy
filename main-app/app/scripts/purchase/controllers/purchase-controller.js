(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Purchase').
        controller('purchase', ['$scope', '$state', 'Ticket', "GameServerProxy", "RequestShaper", 'UserDetails', function($scope, $state,ticket, proxy, req, userValue){
            $scope.purchaseTicket = function(){
                proxy.apiCall(req.makePurchaseRequest(userValue.data.token)).then(
                    function(data){
                        //ticket.createTicket("122334455401203040501121314151");
                        ticket.createTicket(data.payload.card);
                        $state.go('game');
                    }
                );
            };

            $scope.logout = function(){
                proxy.apiCall(req.makeLogoutRequest(userValue.data.token));
                userValue.data = {};
                $state.go('login');
            };
        }]);
})();