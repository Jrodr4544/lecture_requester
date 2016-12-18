// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, $http, LectureRequestsFactory, request){
    debugger
    
    var vm    = this;
    var scope = $scope;
    
    scope.service = LectureRequestsFactory;
    vm.requests = LectureRequestsFactory.LectureRequestsFactory.allRequests;
    // $scope.requests = LectureRequestsFactory.allRequests;


    $scope.submitComment = function($event) {
      debugger
      alert('submitting comment');
      scope.service.addComment(this.request.id, $scope.lectureRequest.comment);
      debugger
      var i = $event;
      // need to push this comment to the scope
      // $scope.items.push('wazzzup');
    }

  }

  LectureRequestsController.$inject = ['$scope', '$http', 'LectureRequestsFactory']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());

  // Below functions commented out because they can now be called straight from the DOM

    // vm.getRequests   = getRequests;
    // vm.userRequests  = userRequests;
    // vm.getRequest    = getRequest;
    // vm.createRequest = createRequest;
    // vm.updateRequest = updateRequest;
    // vm.likedRequests = likedRequests;
    // vm.addComment    = addComment;


    // function getRequests() {
    //   debugger
    //   scope.LectureRequestsFactory.getRequests()
    //           // .then(setRequests)
    // }

    // function userRequests() {
    //   debugger
    //   return LectureRequestsFactory.userRequests($scope.user)
    //           .then(setUserRequests)
    // }

    // function getRequest() {
    //   return LectureRequestsFactory.getRequest()
    //           .then(/*callback function*/)
    // }

    // function createRequest() {
    //   debugger
    //   return LectureRequestsFactory.createRequest($scope.lectureRequest)
    //           .then(function(response){
    //             console.log(response);
    //           })
    // }

    // function updateRequest(id, data) {
    //   return LectureRequestsFactory.updateRequest(id, data)
    //           .then(/*callback function*/)
    // }

    // function likedRequests() {
    //   debugger
    //   return LectureRequestsFactory.likedRequests($scope.user)
    //           .then(setLikedRequests)
    // }

    // function addComment(id, data) {
    //   debugger
    //   return LectureRequestsFactory.addComment(id, data)
    //           .then(console.log(response))
    // }

    // function setRequests(data) {
    //   debugger
    //   vm.allRequests = data;
    // }

    // function setUserRequests(data) {
    //   debugger
    //   return vm.requests = data.lecture_requests;
    // }

    // function setLikedRequests(data) {
    //   debugger
    //   return vm.hearts = data;
    // }

    // function heartRequest() {
    //   debugger
    //   $scope.user
    // }
