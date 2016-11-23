// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function HomeController($scope, $rootScope, Auth){
    $scope.user  = {
      username: '',
      email: '',
      password: '',
      bio: ''
    };
  }

  HomeController.$inject = ['$scope','$rootScope', 'Auth']

  angular
    .module('lecture_requester')  
    .controller('HomeController', HomeController)
}());
