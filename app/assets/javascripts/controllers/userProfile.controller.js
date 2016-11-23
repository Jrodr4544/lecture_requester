// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope, Auth, $state, $rootScope){
    debugger

    $scope.user = $rootScope.user
    // need to put the user details ($scope.user)as a scope by getting current user from the auth controller maybe?

    // $scope.updateUser = function(user) {
    //                 $http.post("/users/:id", user)
    //                 .success(function(data) {

    //                 });
    // }
  }

  UserProfileController.$inject = ['$scope', 'Auth', '$state', '$rootScope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());

