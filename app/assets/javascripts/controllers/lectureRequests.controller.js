// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, LectureRequestsFactory, request, requests){
    debugger
    
    var vm    = this;
    var scope = $scope;

    // The line below assigns one request for when the show action is called. It gets the resolved request from the 
    // route.js as well as all the requests
    vm.request  = scope.$resolve.request;
    vm.requests = scope.$resolve.requests;

    vm.sortByHearts = function() {
      debugger

      function compare(a,b) {
          if (a.user_likes < b.user_likes)
             return 1;
          if (a.user_likes > b.user_likes)
            return -1;
          return 0;
        }

        vm.requests.sort(compare);
    };

    vm.searchStackOverflow = function() {
      debugger
      var search_terms          = document.getElementById('search_field').value;
      // query the stackoverflow api and add the api's response to requests.
      var stackOverflowResponse = LectureRequestsFactory.stackOverflow(search_terms);
      debugger
      console.log(stackOverflowResponse)
    }

    scope.$on('requests:updated', function(event,data) {
      debugger
      // event listener for when LectureRequestsFactory's allRequests get's updated sets the new requests accordingly 
      vm.requests = data;
    });

    scope.submitComment = function($event) {
      debugger
      // using this.request.request so that both the home page and the show page can submit comments
      if (this.request.request) {
        alert('submitting comment');
        LectureRequestsFactory.addComment(this.request.request.id, $event.target.value);
      } else {
        alert('submitting comment');
        LectureRequestsFactory.addComment(this.request.id, $event.target.value);
      }
      // this clears the input on submit
      $event.target.value = "";
    }

  }

  LectureRequestsController.$inject = ['$scope', 'LectureRequestsFactory']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());

