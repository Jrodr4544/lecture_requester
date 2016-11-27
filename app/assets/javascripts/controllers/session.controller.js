(function () {

  'use strict';

  function SessionController(Auth,$scope,$rootScope) {
    debugger
    var vm = this;
    vm.current_user = null;
    

    Auth.currentUser().then(function(user) {
      // gets current user
      // debugger
      $rootScope.user = user
    }, function(error) {
      // Log on console to check out what the error is.
      console.log(error);
      alert('fail');
    });

    // $scope.logout = Auth.logout();

    $scope.$on('devise:login', function(event, user) {
      $scope.isAuthenticated = true;
      $scope.user            = user;
      $rootScope.user        = user;
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
      $scope.isAuthenticated = true;
    });

    $scope.$on('devise:logout', function(event, oldCurrentUser) {
      debugger
      $scope.isAuthenticated = false;
      $rootScope.user        = undefined;
    });

    $scope.$on('devise:new-registration', function(event, user) {
      $scope.isAuthenticated = true;
      $rootScope.user = user; 
    });

  }

  angular
    .module('lecture_requester')  
    .controller('SessionController', SessionController)

}())
