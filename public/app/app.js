(function() {
  'use strict';
  angular.module('meanApp', ['ngResource', 'ngRoute']);

  angular.module('meanApp')
    .config(function($routeProvider, $locationProvider) {
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
        .when('/home', {
          templateUrl: '/partials/main/home',
          controller: 'HomeCtrl'
        })
        .when('/user', {
          templateUrl: '/partials/user/users',
          controller: 'UserCtrl',
          controllerAs: 'users'
        })
        .when('/user/:id', {
          templateUrl: '/partials/user/user-profile',
          controller: 'SingleUserCtrl',
          controllerAs: 'profileCtrl'
        })
        .when('/user/:id/edit', {
          templateUrl: '/partials/user/user-edit',
          controller: 'UserEditCtrl',
          controllerAs: 'editCtrl'
        })
        .when('/maintain', {
          templateUrl: '/partials/user/maintain',
          controller: 'MaintainCtrl'
        });
    });
}());
