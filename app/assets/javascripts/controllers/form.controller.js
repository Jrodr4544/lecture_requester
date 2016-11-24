// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function FormController($scope){
    
    debugger
    $scope.create = function() {
      debugger
      $scope.lectureRequest = {
        'lectureRequest': {
          'title': $scope.lectureRequest.title,
          'content': $scope.lectureRequest.content
        }
      }
      debugger
      //  should send to lecture_requests#create
      $http({
        method: 'POST',
        url: 'http://localhost:3000/lecture_requests',
        data: $scope.lecture_request
      });

      $state.go('home.home');
    }

  }

  FormController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('FormController', FormController)
}());
