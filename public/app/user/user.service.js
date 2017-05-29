(function() {

  angular.module('meanApp')
    .factory('userService', ['$http', userService]);

  function userService($http, $q, $log, $timeout) {
    return {
      getUsers: getUsers,
      getUser: getUser,
      updateUser: updateUser
    };

    function getUsers() {
      return $http.get('api/user').then(function(res) {
        return res.data;
      });
    }

    function getUser(id) {
      return $http.get('api/user/' + id).then(function(res) {
        return res.data;
      });
    }

    function updateUser(id, data) {
      return $http.put('api/user/' + id, data).then(function(res) {
        return res.data;
      });
    }

    // function getAllSchools() {
    //     return $http.get('api/schools')
    //         .then(function(response) {
    //             return response.data;
    //         })
    //         .catch(function(response) {
    //             $log.error('Error retrieving schools: ' + response.statusText);
    //             return $q.reject('Error retrieving schools.');
    //         });
    // }
    //
    // function getAllClassrooms() {
    //     return $http.get('api/classrooms')
    //         .then(function(response) {
    //             return response.data;
    //         })
    //         .catch(function(response) {
    //             $log.error('Error retrieving classrooms: ' + response.statusText);
    //             return $q.reject('Error retrieving classrooms.');
    //         });
    // }
    //
    // function getClassroom(id) {
    //     return $http.get('api/classrooms/' + id)
    //         .then(function(response) {
    //             return response.data;
    //         })
    //         .catch(function(response) {
    //             $log.error('Error retrieving classroom (' + id + '): ' + response.statusText);
    //             return $q.reject('Error retrieving classroom.');
    //         });
    // }
    //
    // function getAllActivities() {
    //
    //     var deferred = $q.defer();
    //
    //     $timeout(function() {
    //
    //         $http.get('api/activities')
    //             .then(function(response) {
    //                 deferred.resolve(response.data);
    //             })
    //             .catch(function(response) {
    //                 $log.error('Error retrieving activities: ' + response.statusText);
    //                 return $q.reject('Error retrieving activities.');
    //             });
    //
    //     }, 1000);
    //
    //     return deferred.promise;
    //
    // }
    //
    // function getMonthName(month) {
    //
    //     var monthNames = ["January", "February", "March", "April", "May", "June",
    //         "July", "August", "September", "October", "November", "December"
    //     ];
    //
    //     return monthNames[month - 1];
    // }

  }

}());
