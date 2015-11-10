(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Game').
        controller('game', ['$scope', '$state', '$interval', 'GameServerProxy', 'RequestShaper', 'UserDetails', 'Ticket', 'CallHandler', 'GameState',
            function($scope, $state, $interval, proxy, req, userValue, ticket, callHandler, gameState){
                var me = this;

                $scope.currentCall = "";
                $scope.ticket = ticket;
                $scope.toGo = 5;
                $scope.callNumber = 0;
                $scope.currentStage = gameState.currentStage;

                me.nextCall = function(){
                    $scope.callNumber += 1;
                    return $scope.callNumber;
                };

                me.getCall = function(){
                    console.log('Call Number: ' + $scope.callNumber+1);
                    proxy.ApiCall(req.makeCallRequest(userValue.data.token, me.nextCall())).then(
                        function(data){
                            $scope.currentCall = callHandler.addNewCall(data);
                            $scope.toGo = callHandler.checkTicketOneLine(ticket.unorderedNumbers);
                            gameState.checkForWin(data);
                        },
                        function(data){
                            $interval.cancel(callInterval);
                        }
                    );
                };
                var callInterval;
                me.beginCalls = function(){
                    callInterval = $interval(me.getCall, 500, 90);
                };

                me.beginCalls();

        }]);
})();