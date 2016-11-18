// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope){
    $scope.request = "I am making a request to learn more about rails";
  }

  LectureRequestsController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());
