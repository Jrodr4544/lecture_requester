// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, $http, LectureRequestsFactory, request){
    debugger
    
    var vm = this;

    vm.allRequests;
    vm.requests; 
    vm.request = $scope.$resolve.request;
    vm.hearts  = $scope.user.hearts

    vm.getRequests   = getRequests;
    vm.userRequests  = userRequests;
    vm.getRequest    = getRequest;
    vm.createRequest = createRequest;
    vm.updateRequest = updateRequest;
    vm.likedRequests = likedRequests;
    vm.addComment    = addComment;


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

    function updateRequest(id, data) {
      return LectureRequestsFactory.updateRequest(id, data)
              .then(/*callback function*/)
    }

    function likedRequests() {
      debugger
      return LectureRequestsFactory.likedRequests($scope.user)
              .then(setLikedRequests)
    }

    function addComment(id, data) {
      debugger
      return LectureRequestsFactory.addComment(id, data)
              .then(console.log(response))
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
      return vm.hearts = data; // unless response is already data.data then this should be set as data
    }


    $scope.submitComment = function($event) {
      debugger
        alert('submitting comment');
        addComment(this.request.id, $scope.lectureRequest.comment);
    }

  }

  LectureRequestsController.$inject = ['$scope', '$http', 'LectureRequestsFactory']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());
