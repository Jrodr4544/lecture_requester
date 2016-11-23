(function () {

  'use strict';

  function SessionController(Auth,$scope,$location) {
    debugger
    var vm = this;
    vm.current_user = null;

    // this.user = function() {
    //   Auth.currentUser().then(function(user) {
    //     // gets current user
    //     // debugger
    //     return user;
    //     vm.current_user = user;
    //     $scope.isAuthenticated = true;
    //     // UserService.setUser(user);
    //   }, function(error) {
    //     // Log on console to check out what the error is.
    //     console.log(error);
    //     alert('fail');
    //   });
    // }

      $scope.$on('devise:new-session', function(event, currentUser) {
        $scope.isAuthenticated = true;
      });

      $scope.$on('devise:logout', function(event, oldCurrentUser) {
        $scope.isAuthenticated = false;
      });

      $scope.$on('devise:new-registration', function(event, user) {
        $scope.isAuthenticated = true;
      });

      this.logout = function() {
        Auth.logout().then(function(oldUser) {
          alert("Successfully logged out!");
          $location.path("/");
        }, function(error) {
          // An error occurred logging out.
        });
      }

  }

  angular
    .module('lecture_requester')  
    .controller('SessionController', SessionController)

}())
