(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserProfileCtrl', ['userService', '$location', '$routeParams', UserProfileCtrl]);

  function UserProfileCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUser($routeParams.id).then(function(usr) {
      console.log('getUser single s', usr);
      vm.user = usr;
    });

    vm.update = function() {
      userService.updateUser($routeParams.id, vm.user).then(function(usr) {
        console.log('getUser', usr);
      });
    };

    vm.delete = function() {
      userService.deleteUser($routeParams.id).then(function(usr) {
        console.log('delete', usr);
      });
    };
  }
}());
