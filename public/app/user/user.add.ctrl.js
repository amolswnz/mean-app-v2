(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserAddCtrl', ['userService', '$location', '$routeParams', UserAddCtrl]);

  function UserAddCtrl(userService, $location, $routeParams) {
    var vm = this;

    vm.add = function() {
      console.log(vm);
      userService.addUser(vm.user).then(function(usr) {
        console.log('adduser ', usr);
        vm.user = usr;
      });
    };
  }
}());
