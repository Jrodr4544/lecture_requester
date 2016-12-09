(function () {

  'use strict';

  function UserFactory($http, Auth) {
    debugger
    var vm = this;
    vm.current_user = null;

    this.getUser = Auth.currentUser().then(function(user) {
      vm.current_user = user;
      $scope.isAuthenticated = true;
    }, function(error) {
      // Log on console to check out what the error is.
      console.log(error);
      alert('fail');
    });



    function updateUser(user) {
      debugger
      var req = {
        method: 'POST',
        url: '/users/'+user.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          user: user
        }
      }
      debugger

      return $http(req)
        .catch(handleError);
    }

  }

  UserFactory.$inject = ['$http', 'Auth']

  angular
    .module('lecture_requester')  
    .factory('UserFactory', UserFactory)

}())
