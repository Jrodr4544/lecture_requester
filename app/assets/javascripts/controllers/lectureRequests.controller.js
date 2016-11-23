// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope){
    $scope.request = "I am making a request to learn more about rails";
    
    var vm = this;

    // vm.lectureRequest = {
    //   title: '',
    //   content: ''
    // }

    vm.create = function() {
      debugger
      vm.lectureRequest.title = '';
    }
  }

  LectureRequestsController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());
