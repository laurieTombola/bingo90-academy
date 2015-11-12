(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('html/login-state.html',
                '<section class="loginform cf">'+
                    '<form name="login" action="">' +
                        '<ul>' +
                            '<li>' +
                                '<label for="username">Username</label>' +
                                '<input type="username" name="username" placeholder="joe.blog" ng-model="username" required>' +
                            '</li>' +
                            '<li>' +
                                '<label for="password">Password</label>' +
                                '<input type="password" name="password" placeholder="password" ng-model="password" required>' +
                            '</li>' +
                            '<br><li>' +
                                '<input type="button" value="Login" ng-click="logIn()">' +
                            '</li>' +
                        '</ul>' +
                    '</form>' +
                '</section>'
            ).put('html/game-state.html',
                '<section>' +
                '<h1>Bingo89</h1>' +
                '<h2>Your Ticket</h2>' +
                    '<table>' +
                        '<tr>' +
                            '<td></td>' +
                        '</tr>' +
                        '<tr>' +
                        '</tr>' +
                        '<tr>' +
                        '</tr>' +
                    '</table>' +
                '</section>'
            ).put('html/ticket-square.html',
                '<td></td>'
            );
        }
        ]);
})();