(function() {
  'use strict';
  angular.module('meanApp')
    .controller('UserCtrl', ['userService', '$location', '$routeParams', UserCtrl]);

  function UserCtrl(userService, $location, $routeParams) {
    var vm = this;

    userService.getUsers().then(function(res) {
      // console.log('getUsers from ctrl ', res, new Date());
      vm.allData = res;
    });
  }
}());
