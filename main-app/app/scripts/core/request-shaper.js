(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API').
        service('RequestShaper', ['UserDetails', function (userDetails) {
            var me = this;

            me.makeLoginRequest = function (username, password) {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {"username": username, "password": password}
                };
            };

            me.makeLogoutRequest = function () {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/logout',
                    headers: {
                        'x-token': userDetails.data.token,
                        'Content-Type': 'application/json'
                    }
                };
            };

            me.makePurchaseRequest = function () {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/buyticket',
                    headers: {
                        'x-token': userDetails.data.token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        gameId: 1,
                        userId: userDetails.data.userId,
                        balance: userDetails.data.balance
                    }
                };
            };

            me.makeCallRequest = function (callNumber) {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/getcall',
                    headers: {
                        'x-token': userDetails.data.token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        gameId: 1,
                        userId: userDetails.data.userId,
                        balance: userDetails.data.balance,
                        callnumber: callNumber
                    }
                };
            };

            me.makeNextGameRequest = function () {
                return {
                    method: 'GET',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/next',
                    headers: {
                        'x-token': userDetails.data.token,
                        'Content-Type': 'application/json'
                    }
                };
            };

        }]);
})();