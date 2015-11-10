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

            me.checkTicketOneLine = function(cardNumbers){
                var i, j, lineToGos = [5,5,5], bestToGo;
                for(i = 0; i<3; i++){
                    var lineStart = i*9;
                    for(j = 0; j<lineStart+9;j++) {
                        //console.log(me.calls);
                        //console.log(cardNumbers[i+j]);
                        if(me.calls.indexOf(parseInt(cardNumbers[i+j])) !== -1){
                            if(lineToGos[i] < 1) return;
                            lineToGos[i] -= 1;
                            console.log("line "+i+" number found. Numer: "+cardNumbers[i+j]);
                        }
                    }
                }
                bestToGo = lineToGos[0] < lineToGos[1] ? lineToGos[0] : (lineToGos[1] < lineToGos[2] ? lineToGos[1] : lineToGos[2]);
                console.log(lineToGos);
                console.log(bestToGo);
                return bestToGo;
            };

            
        }]);
})();