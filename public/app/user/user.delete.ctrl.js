(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserDeleteCtrl', ['userService', '$location', '$routeParams', UserDeleteCtrl]);

  function UserDeleteCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUser($routeParams.id).then(function(usr) {
      console.log('getUser', usr);
      vm.user = usr;
    });

    vm.delete = function() {
      userService.deleteUser($routeParams.id).then(function(usr) {
        console.log('delete', usr);
      });
    };
  }
}());
