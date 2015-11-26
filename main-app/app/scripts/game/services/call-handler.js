(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Game').
        service('CallHandler', [function(){
            var me = this;
            me.calls  = [];
            me.addNewCall = function(data){
                me.calls.push(data.payload.call);
                return data.payload.call;
            };
        }]);
})();