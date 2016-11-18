// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function UserProfileController($scope){
    $scope.request = "Hello User";
  }

  UserProfileController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('UserProfileController', UserProfileController)
}());
