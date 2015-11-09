(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API').
        service('RequestShaper', [function(){
            var me = this;

            me.makeLoginRequest = function(username, password){
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {"username":username, "password":password}
                };
            };

            me.makePurchaseRequest = function(token){
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/buyticket',
                    headers: {
                        'x-token':token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        gameId: 1,
                        userId:"drwho",
                        balance: 100000
                    }
                };
            };

            me.makeCallRequest = function(token, callNumber){
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/getcall',
                    headers: {
                        'x-token':token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        gameId: 1,
                        userId:"drwho",
                        balance: 100000,
                        callnumber:callNumber
                    }
                };
            };

        }]);
})();