(function () {

  'use strict';

  function UserService($http) {
    debugger
    var u = {
        userArray: []
    };

    u.get = function(id) {
      return $http.get('/users/' + id + '.json').then(function(res) {
          debugger
          console.log('request: ', res.data);
          angular.copy(res.data, u.userArray);
      });
    };
      return u;
  }

  UserService.$inject = ['$http']

  angular
    .module('lecture_requester')  
    .factory('UserService', UserService)

}())
