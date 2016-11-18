// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function HomeController($scope){
    $scope.quote = "home page";
  }

  HomeController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('HomeController', HomeController)
}());
