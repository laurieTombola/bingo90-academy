(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API').
        service('PurchaseApiProxy',
        ['$q', 'Authenticator', 'ApiCaller', 'Converter', function ($q, auth, api, converter) {

            me.purchase = function () {
                var defered = $q.defer();
                api.apiCall(makePurchaseRequest().then(
                    function (response) {
                        defered.resolve(response.data);
                    }, function (response) {
                        defered.reject(response);
                    }
                ));
                return defered.promise;
            };

            var makePurchaseRequest = function () {
                return {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/buyticket',
                    headers: {
                        'x-token': auth.sessionDetails.data.token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        gameId: 1,
                        userId: auth.sessionDetails.data.userId,
                        balance: auth.sessionDetails.data.balance
                    }
                };
            };

        }]);

})();