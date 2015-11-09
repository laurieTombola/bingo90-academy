(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Values', []);
    angular.module('Tombola.Games.Bingo90.Purchase', ['Tombola.Games.Bingo90.Values']);
    angular.module('Tombola.Games.Bingo90.Game', ['Tombola.Games.Bingo90.Values']);
    angular.module('Tombola.Games.Bingo90.API', ['Tombola.Games.Bingo90.Values']);
    angular.module('Tombola.Games.Bingo90.Login', ['Tombola.Games.Bingo90.API', 'Tombola.Games.Bingo90.Values']);
    angular.module('Tombola.Games.Bingo90', ['ui.router', 'Tombola.Games.Bingo90.API', 'Tombola.Games.Bingo90.Login', 'Tombola.Games.Bingo90.Values', 'Tombola.Games.Bingo90.Game', 'Tombola.Games.Bingo90.Purchase'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url:'/login',
                    controller: 'login',
                    templateProvider:function ($templateCache){
                        return $templateCache.get("html/login-state.html");
                    }
                })
                .state('game', {
                    url:'/game',
                    controller: 'game',
                    templateProvider:function ($templateCache){
                        return $templateCache.get("html/game-state.html");
                    }
                })
                .state('purchase', {
                    url:'/purchase',
                    controller: 'purchase',
                    templateProvider:function ($templateCache){
                        return $templateCache.get("html/purchase-state.html");
                    }
                });
        });
})();