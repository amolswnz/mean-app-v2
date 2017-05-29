(function() {
  'use strict';
  angular.module('meanApp')
    .controller('SingleUserCtrl', ['userService', '$location', '$routeParams', SingleUserCtrl]);

  function SingleUserCtrl(userService, $location, $routeParams) {
    var vm = this;

    // if ("undefined" === typeof vm.users) {
      userService.getUser($routeParams.id).then(function(usr) {
        console.log('getUser', usr);
        vm.user = usr;
      });
    // }
  }
}());
