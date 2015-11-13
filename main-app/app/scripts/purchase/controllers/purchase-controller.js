(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Purchase').
        controller('purchase', ['$scope', '$state', '$interval', 'Ticket', "GameServerProxy", "RequestShaper", 'UserDetails',
            function($scope, $state, $interval, ticket, proxy, req, userValue){
                var me = this;
                me.ticketBought = false;
                $scope.purchaseTicket = function(){
                    if(me.ticketBought) return;
                    proxy.apiCall(req.makePurchaseRequest(userValue.data.token)).then(
                        function(data){
                            //ticket.createTicket("122334455401203040501121314151");s
                            ticket.createTicket(data.payload.card);
                            me.ticketBought = true;

                        }
                    );
                };

                $scope.logout = function(){
                    proxy.apiCall(req.makeLogoutRequest(userValue.data.token));
                    userValue.data = {};
                    $state.go('login');
                };

                me.getNextGameTime = function(){
                    proxy.apiCall(req.makeNextGameRequest(userValue.data.token)).then(function(data){
                        console.log(data);
                        var gameDate = new Date(data.payload.start);
                        var currentDate = new Date();

                        $scope.nextGameTime = Math.abs(gameDate.getTime() - currentDate.getTime());
                        $scope.nextGameTime = 1000;
                        $interval(me.tick, 1000, 1);
                    });
                };

                me.getNextGameTime();

                me.tick = function(){
                    $scope.nextGameTime -= 1000;
                    if($scope.nextGameTime < 0){
                        if(me.ticketBought){
                            $state.go('game');
                            return;
                        }
                        me.getNextGameTime();
                        return;
                    }
                    $interval(me.tick, 1000, 1);
                };

                $scope.nextGameTime = 0;
        }]);
})();