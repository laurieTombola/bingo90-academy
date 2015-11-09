(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Game').
        controller('game', ['$scope', '$state', '$interval', 'GameServerProxy', 'RequestShaper', 'UserDetails', 'Ticket',function($scope, $state, $interval, proxy, req, userValue, ticket){
            var me = this;

            $scope.currentCall = "";
            $scope.ticket = ticket;
            $scope.toGo = 5;
            $scope.callNumber = 0;

            //me.fillTicket = function(){
            //    $scope.ticketNumbers = ticket.orderedNumbers;
            //};
            me.nextCall = function(){
                $scope.callNumber += 1;
                return $scope.callNumber;
            };

            me.getCall = function(){
                proxy.ApiCall(req.makeCallRequest(userValue.data.token, me.nextCall())).then(
                    function(data){
                        console.log(data);
                        $scope.currentCall = data.payload.call;
                        $interval(me.getCall(), 3000, 1);
                    },
                    function(data){

                    }
                );
            };

            me.getCall();

        }]);
})();