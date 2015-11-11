(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Game').
        service('GameState', ['$state', 'Bingo90States', function($state, states){
            var me = this;
            me.states = states;
            me.currentStage = me.states.gameStages[0];
            me.oneLineWin = function(){
                nextStage();
            };

            me.twoLineWin = function(){
                nextStage();
            };

            me.fullHouseWin = function(){
                nextStage();
            };

            var nextStage = function(){
                me.currentStage = states.gameStages[states.gameStages.indexOf(me.currentStage)+1];
            };

            me.checkForWin = function(data){
                switch(data.message){
                    case "Line":
                        me.currentStage = me.states.gameStages[2];
                        break;
                    case "Winner":
                        $state.go('purchase');
                        break;
                    default: break;
                }
            };

        }]);
})();