(function () {
    'use strict';

    angular.module('Tombola.Games.Bingo90.Game').
        directive('ticketSquare', function(){
            return {
                restrict: 'A',
                template: function(element, attributes){
                    var html = '<div ng-class="ticket.marks[' + attributes.ticketSquare + ']" ng-click="clickBox('+attributes.ticketSquare+')">{{ticket.orderedNumbers['+attributes.ticketSquare+']}}</div>';
                    return html;
                }
            };
        });
})();