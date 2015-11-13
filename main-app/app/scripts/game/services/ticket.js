(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Values').
        service('Ticket', function(){
            var me = this;
            me.unorderedNumbers = [];
            me.orderedNumbers = [];
            me.marks = [];

            me.createTicket = function(numberString){
                if(numberString.length !== 30) return;
                var j;
                for(j = 0; i< 27; i++){
                    marks[j] = "";
                }
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

            me.checkMark = function(lastCall){
                if(me.orderedNumbers.indexOf(lastCall.toString()) !== -1){
                    me.marks[me.orderedNumbers.indexOf(lastCall.toString())] = 'marked';

                }
            };

            me.calcToGo = function(stage){
                switch(stage){
                    case "One Line":
                        //return me.calcOneLineToGo();
                        return me.calcFullHouseToGo();
                    case "Two Lines":
                        return me.calcTwoLinesToGo();
                    case "Full House":
                        return me.calcFullHouseToGo();
                }
            };

            me.calcOneLineToGo = function(){
                var row, column, toGos = [5,5,5], bestToGo = 5;
                for(row = 0; row < 3; row++){
                    for(column = 0; column < 9; column++){
                        if(me.marks[column+(row*9)] === "marked"){
                            toGos[row] -= 1;
                        }
                    }
                }
                console.log(toGos);
                if(toGos[0] <= toGos[1] && toGos[0] <= toGos[2]){
                    console.log("Line One: "+ toGos[0]);
                    return toGos[0];
                }
                else if(toGos[1] <= toGos[0] && toGos[1] <= toGos[2]){
                    console.log("Line Two: "+ toGos[1]);
                    return toGos[1];
                }
                else if(toGos[2] <= toGos[0] && toGos[2] <= toGos[1]){
                    console.log("Line Three: "+ toGos[2]);
                    return toGos[2];
                }
            };

            me.calcTwoLinesToGo = function(){

            };

            me.calcFullHouseToGo = function(){
                var i, marked = 15;
                for(i = 0; i < 27; i++){
                    if(me.marks[i] === "marked"){
                        marked -= 1;
                    }
                }
                return marked;
            };

            me.reset = function(){
                me.unorderedNumbers = [];
                me.orderedNumbers = [];
                me.marks = [];
            };
        });

})();