(function () {
    'use strict';
    angular.module('Tombola.Games.Bingo90.Values', []);
    angular.module('Tombola.Games.Bingo90.API', ['Tombola.Games.Bingo90.Values']);
    angular.module('Tombola.Games.Bingo90.Login', ['Tombola.Games.Bingo90.API', 'Tombola.Games.Bingo90.Values']);
    angular.module('Tombola.Games.Bingo90', ['ui.router', 'Tombola.Games.Bingo90.API', 'Tombola.Games.Bingo90.Login', 'Tombola.Games.Bingo90.Values'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url:'/login',
                    controller: 'login',
                    templateProvider:function ($templateCache){
                        return $templateCache.get("html/login-state.html");
                    }
                });
                //.state('lobby', {
                //    url:'/lobby',
                //    controller: 'lobby',
                //    templateProvider:function ($templateCache){
                //        return $templateCache.get("html/lobby-state.html");
                //    }
                //});
        });
})();