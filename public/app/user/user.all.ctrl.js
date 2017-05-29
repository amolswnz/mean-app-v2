(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserCtrl', ['userService', '$location', '$routeParams', UserCtrl]);

  function UserCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUsers().then(function(users) {
      console.log('getUsers from ctrl ', users, new Date());
      vm.allData = users;
    });
  }
}());
