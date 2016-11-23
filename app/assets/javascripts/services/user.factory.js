(function () {

  'use strict';

  function UserFactory($http, Auth) {
    debugger
    var vm = this;
    vm.current_user = null;

    this.getUser = Auth.currentUser().then(function(user) {
      // gets current user
      // debugger
      vm.current_user = user;
      $scope.isAuthenticated = true;
      // UserService.setUser(user);
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
    // var u = {
    //     userArray: []
    // };

    // u.get = function(id) {
    //   return $http.get('/users/' + id + '.json').then(function(res) {
    //       debugger
    //       console.log('request: ', res.data);
    //       angular.copy(res.data, u.userArray);
    //   });
    // };
      // return u;
  }

  UserFactory.$inject = ['$http', 'Auth']

  angular
    .module('lecture_requester')  
    .factory('UserFactory', UserFactory)

}())
