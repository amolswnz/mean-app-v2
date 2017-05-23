(function() {
    'use strict';
    angular.module('app')
        .controller('MainCtrl', function($scope, $http) {
            $scope.txt = "Hello from Angular Controller";
            $http.get('api/activity')
                .then(function(response) {
                    console.log(response.data[0]);
                    // return response.data;
                });
        });

}());
