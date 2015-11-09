(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Values').
        service('Ticket', function(){
            var me = this;
            me.unorderedNumbers = [];
            me.orderedNumbers = [];
            me.createTicket = function(numberString){
                if(numberString.length !== 30) return;
                me.unorderedNumbers = [];
                for(var i = 0; i < numberString.length; i += 2){
                    var number = numberString[i].toString()+numberString[i+1].toString();
                    me.unorderedNumbers.push(number.toString());
                }
                me.orderNumbers();
            };

            me.orderNumbers = function(){
                var i;
                for(i = 0; i<me.unorderedNumbers.length; i++){
                    me.orderedNumbers[parseInt((9*(Math.floor(i/5))))+parseInt(me.eightOrLess(me.unorderedNumbers[i][0]))] = me.unorderedNumbers[i];
                }
            };

            me.eightOrLess = function(number){
                return number < 9 ? number : 8;
            };
        });

})();