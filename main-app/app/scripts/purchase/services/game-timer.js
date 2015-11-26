(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Purchase').
        service('GamerTimer', ['$state', 'PurchaseApiProxy', 'Authenticate', function ($state, proxy, auth) {
            var me = this;
            me.nextGameTime = 0;

            me.getNextGameTime = function () {
                if (!auth.authenticate()) {
                    auth.logout();
                    $state.go('login');
                    return;
                }
                proxy.purchase().then(function (data) {
                    var gameDate = new Date(data.payload.start);
                    var currentDate = new Date();

                    me.nextGameTime = Math.abs(gameDate.getTime() - currentDate.getTime());
                    me.nextGameTime = 1000;
                    $interval(me.tick, 1000, 1);
                });
            };

            me.tick = function () {
                $scope.nextGameTime -= 1000;
                if ($scope.nextGameTime < 0) {
                    if (me.ticketBought) {
                        $state.go('game');
                        return;
                    }
                    me.getNextGameTime();
                    return;
                }
                $interval(me.tick, 1000, 1);
            };
        }]);
})();