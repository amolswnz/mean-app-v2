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
      console.log('update' , vm.user);
      userService.updateUser($routeParams.id, vm.user).then(function(usr) {
        console.log('data updated', vm.user);
        toastr()
      });
    };
  }
}());
