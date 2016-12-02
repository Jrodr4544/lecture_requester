// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, $http, LectureRequestsFactory){
    $scope.request = "I am making a request to learn more about rails";
    
    var vm = this;

    vm.allRequests;
    vm.comment;
    vm.requests; 
    
    // $scope.lectureRequest.title   = '';
    // $scope.lectureRequest.content = '';

    vm.getRequests   = getRequests;
    vm.userRequests  = userRequests;
    vm.getRequest    = getRequest;
    vm.createRequest = createRequest;
    vm.updateRequest = updateRequest;


    function getRequests() {
      debugger
      return LectureRequestsFactory.getRequests()
              .then(setRequests)
    }

    function userRequests() {
      debugger
      return LectureRequestsFactory.userRequests($scope.user)
              .then(setUserRequests)
    }

    function getRequest() {
      return LectureRequestsFactory.getRequest()
              .then(/*callback function*/)
    }

    function createRequest() {
      debugger
      return LectureRequestsFactory.createRequest($scope.lectureRequest)
              .then(function(response){
                console.log(response);
              })
    }

    function updateRequest() {
      return LectureRequestsFactory.updateRequest()
              .then(/*callback function*/)
    }

    function setRequests(data) {
      return vm.allRequests = data; // unless response is already data.data then this should be set as data
    }

    function setUserRequests(data) {
      debugger
      return vm.requests = data.lecture_requests; // unless response is already data.data then this should be set as data
    }

    $scope.submitComment = function($event) {
      debugger
        alert('submitting comment');
        vm.comment = $event.value;
        console.log($event);
        console.log($scope.username);
    }
    // vm.create = function() {
    //   debugger
    //   vm.lectureRequest.title = '';
    // }
  }

  LectureRequestsController.$inject = ['$scope', '$http', 'LectureRequestsFactory']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());
