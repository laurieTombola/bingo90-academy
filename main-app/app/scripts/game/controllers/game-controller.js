(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Game').
        controller('game',
        ['$scope', '$state', '$interval', 'GameServerProxy', 'RequestShaper', 'UserDetails', 'Ticket', 'CallHandler', 'GameState',
            function ($scope, $state, $interval, proxy, req, userValue, ticket, callHandler, gameState) {
                var me = this,
                    timeBetweenCalls = 100;

                $scope.currentCall = "";
                $scope.ticket = ticket;
                $scope.toGo = 5;
                $scope.callNumber = 0;
                $scope.currentStage = gameState.currentStage;

                me.nextCall = function () {
                    $scope.callNumber += 1;
                    return $scope.callNumber;
                };

                me.markTicket = function (lastCall) {
                    ticket.checkMark(lastCall);
                };

                me.getCall = function () {
                    proxy.apiCall(req.makeCallRequest(userValue.data.token, me.nextCall())).then(
                        function (data) {
                            $scope.currentCall = callHandler.addNewCall(data);
                            me.markTicket(me.formatSingleDigitCall(data.payload.call));
                            $scope.toGo = ticket.calcToGo($scope.currentStage);
                        },
                        function (data) {
                            $interval.cancel(callInterval);
                        }
                    );
                };

                var callInterval;
                me.beginCalls = function () {
                    callInterval = $interval(me.getCall, timeBetweenCalls, 90);
                };

                me.beginCalls();

                $scope.logout = function () {
                    proxy.apiCall(req.makeLogoutRequest(userValue.data.token));
                    userValue.data = {};
                    $interval.cancel(callInterval);
                    $state.go('login');
                    ticket.reset();
                };

                me.formatSingleDigitCall = function (call) {
                    if (call.toString().length < 2) {
                        return "0" + call.toString();
                    }
                    else {
                        return call;
                    }
                };
            }]);
})();