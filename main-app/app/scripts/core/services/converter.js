(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.API')
        .service('Converter',  [
            function(){
                var me = this;

                me.convertLoginData = function(response){
                    return {
                        token: response.payload.user.token,
                        userId: reponse.payload.user.userId,
                        balance: response.payload.user.balance
                    };
                };
            }
        ]);
})();
