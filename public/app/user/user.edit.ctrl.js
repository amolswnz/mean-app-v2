(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserEditCtrl', ['userService', '$location', '$routeParams', UserEditCtrl]);

  function UserEditCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUser($routeParams.id).then(function(usr) {
      console.log('getUser', usr);
      vm.user = usr;
    });

    vm.update = function() {
      userService.updateUser($routeParams.id, vm.user).then(function(usr) {
        console.log('getUser', usr);
      });
    };
  }
}());
