(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Purchase').
        controller('purchase', ['$scope', '$state', '$interval', 'Ticket', "PurchaseApiProxy", 'Authenticator', 'GameTimer',
            function($scope, $state, $interval, ticket, proxy, auth, timer){
                var me = this;
                me.ticketBought = false;

                $scope.nextGameTime = timer.nextGameTime;

                timer.getNextGameTime();

                $scope.purchaseTicket = function(){
                    if(me.ticketBought) {
                        return;
                    }
                    if(!auth.authenticate()) {
                        return;
                    }
                    proxy.purchase.then(
                        function(data){
                            ticket.createTicket(data.payload.card);
                            me.ticketBought = true;
                        }
                    );
                };

                $scope.logout = function(){
                    auth.logout();
                    $state.go('login');
                };


        }]);
})();