(function() {
    'use strict';
    angular.module('app', ['ngResource', 'ngRoute']);

    angular.module('app')
        .config(function($routeProvider, $locationProvider){
            // $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false
            // });
            $locationProvider.hashPrefix("");
            $routeProvider
                .when('/', {
                    templateUrl: '/partials/main/main',
                    controller: 'MainCtrl'
                })
                .when('/contact', {
                    templateUrl: '/partials/main/main',
                    controller: 'MainCtrl2'
                })
                ;

        });
}());
