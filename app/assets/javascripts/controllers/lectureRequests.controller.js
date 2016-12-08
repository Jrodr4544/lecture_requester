// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, $http, LectureRequestsFactory, request){
    debugger
    
    var vm = this;

    vm.allRequests;
    vm.comment;
    vm.requests; 
    vm.request = $scope.$resolve.request;
    vm.hearts  = $scope.user.hearts
    // vm.request;
    // $scope.lectureRequest.content = '';

    vm.getRequests   = getRequests;
    vm.userRequests  = userRequests;
    vm.getRequest    = getRequest;
    vm.createRequest = createRequest;
    vm.updateRequest = updateRequest;
    vm.likedRequests = likedRequests;


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

    function likedRequests() {
      return LectureRequestsFactory.userRequests($scope.user)
              .then(setLikedRequests)
    }

    function setRequests(data) {
      return vm.allRequests = data; // unless response is already data.data then this should be set as data
    }

    function setUserRequests(data) {
      debugger
      return vm.requests = data.lecture_requests; // unless response is already data.data then this should be set as data
    }

    function setLikedRequests(data) {
      debugger
      return vm.hearts = data.lecture_requests; // unless response is already data.data then this should be set as data
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
