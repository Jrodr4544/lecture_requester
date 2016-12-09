// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope, Auth, $state, $rootScope){
    debugger

    $scope.user = Auth._currentUser
  }

  UserProfileController.$inject = ['$scope', 'Auth', '$state', '$rootScope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());

