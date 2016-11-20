// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope){
    // debugger

    // $scope.current_user = {
    //   username: Auth._currentUser.username,
    //   email:    Auth._currentUser.email
    // }

    // $scope.$watch( Auth.isAuthenticated, function ( isAuthenticated ) {
    //   $scope.isAuthenticated = isAuthenticated;
    //   $scope.currentUser = Auth._currentUser();
    // });

    $scope.request = "Hello User";

  }

  UserProfileController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());
