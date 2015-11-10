(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Values').
        value('Bingo90States', {
            states:['login','purchase', 'ticket'],
            gameStages:['One Line', 'Two Line', 'Full House']
        });
})();