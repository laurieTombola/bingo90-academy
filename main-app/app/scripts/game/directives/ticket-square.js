(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Game').
        directive('ticketSquare', function(){
            return {
                restrict: 'A',
                template: function(element, attributes){
                    var html = '<div ng-click="clickBox('+attributes.squareNumber+')">{{attributes.squareNumber}}</div>';
                    return html;
                }
            };
        });
})();