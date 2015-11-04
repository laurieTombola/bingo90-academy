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

        }]);
})();