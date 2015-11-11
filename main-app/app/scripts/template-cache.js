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
            );
            $templateCache.put('html/game-state.html',
                '<section class="center">' +
                    '<h1>Bingo89</h1>' +
                    '<h2>Your Ticket</h2>' +
                    '<h2>Current Stage: {{currentStage}}</h2>' +
                    '<h2>Last Call: {{currentCall}}</h2>' +
                    '<h2>Number of Calls Left: {{90-callNumber}}</h2>' +
                    '<table>' +
                        '<tr>' +
                            '<td ticket-square="0"></td>' +
                            '<td ticket-square="1"></td>' +
                            '<td ticket-square="2"></td>' +
                            '<td ticket-square="3"></td>' +
                            '<td ticket-square="4"></td>' +
                            '<td ticket-square="5"></td>' +
                            '<td ticket-square="6"></td>' +
                            '<td ticket-square="7"></td>' +
                            '<td ticket-square="8"></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td ticket-square="9"></td>' +
                            '<td ticket-square="10"></td>' +
                            '<td ticket-square="11"></td>' +
                            '<td ticket-square="12"></td>' +
                            '<td ticket-square="13"></td>' +
                            '<td ticket-square="14"></td>' +
                            '<td ticket-square="15"></td>' +
                            '<td ticket-square="16"></td>' +
                            '<td ticket-square="17"></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td ticket-square="18"></td>' +
                            '<td ticket-square="19"></td>' +
                            '<td ticket-square="20"></td>' +
                            '<td ticket-square="21"></td>' +
                            '<td ticket-square="22"></td>' +
                            '<td ticket-square="23"></td>' +
                            '<td ticket-square="24"></td>' +
                            '<td ticket-square="25"></td>' +
                            '<td ticket-square="26"></td>' +
                        '</tr>' +
                    '</table>' +
                    '<div class="toGo">' +
                    '<div>{{toGo}}</div>' +
                    '<div>To</div>' +
                    '<div>Go</div>' +
                    '</div>' +
                    '<button ng-click="logout()">logout</button>' +
                '</section>'
            );
            $templateCache.put('html/purchase-state.html',
                '<section>' +
                    '<h1>Purchase Screen</h1>' +
                    '<button ng-click="purchaseTicket()">Buy Ticket</button>' +
                    '<button ng-click="logout()">logout</button>' +
                '</section>'
            );
        }
        ]);
})();