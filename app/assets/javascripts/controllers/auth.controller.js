(function () {

  'use strict';

  function AuthController(Auth,$scope, $rootScope,$state) {
    // might need an auth service

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    $scope.signIn = function() {
      debugger
      Auth.login($scope.user, config).then(function(user) {
        debugger
        $scope.user = user
        $rootScope  = user;
        $state.go('home.home');
      }, function(error) {
        alert("failed");
      });
    }  

    $scope.register = function() {
      Auth.register($scope.user, config).then(function(user) {
        // tie user to rootscope
        $rootScope = user;
        $state.go('home.home');
      }, function(error) {
        alert("failed");
      });
    }

    $scope.logout = function() {
      Auth.logout().then(function(oldUser) {
        alert("Successfully logged out!");
        $state.go('home.home');
      }, function(error) {
        // An error occurred logging out.
      });
    }

  }

  angular
    .module('lecture_requester')  
    .controller('AuthController', AuthController)

}())
