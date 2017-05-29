(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserAddCtrl', ['userService', '$location', '$routeParams', UserAddCtrl]);

  function UserAddCtrl(userService, $location, $routeParams) {
    var vm = this;

  }
}());
