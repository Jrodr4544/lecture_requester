(function () {

  'use strict';

  function LectureRequestsFactory($rootScope,$http) {
    var vm = this;
    var LectureRequestsFactory = {};
        LectureRequestsFactory.allRequests  = [];
        LectureRequestsFactory.userRequests = [];
    // return LectureRequestsFactory; // not needed because the return below is doing it :-)
    
    return {
              // users: vm.users,
        // allRequests: vm.allRequests,
           // requests: requests,
            // request: vm.request,
             // hearts: vm.hearts,
       // userRequests: vm.userRequests,
LectureRequestsFactory: LectureRequestsFactory,
       getUserRequests: getUserRequests,
    // allUserRequests: allUserRequests,
           getRequests: getRequests,
         likedRequests: likedRequests,
            addComment: addComment, 
         createRequest: createRequest,
          heartRequest: heartRequest, 
         updateRequest: updateRequest 
    }

    function getRequests() {
      debugger
      // no ssl
      $http.get('http://localhost:3000/lecture_requests.json')
                  .then(setRequests);
    }

    // need to rename any views that use the old userRequests to getUserRequests
    function getUserRequests(user) {
      debugger
      return $http.get('http://localhost:3000/users/'+user.id+'.json')
                  .then(setUserRequests)
    }

    function heartRequest(data) {
      debugger
      $http.post('/lecture_requests/'+$scope.request.id+'/heart', data).success(function(data){
        debugger
        // This will store the data in hearts for this service which can then be accessed. 
        // Maybe all the lecture requests and other details should be here in its $scope.
        vm.hearts = data;
      })
    }

    function likedRequests(user) {
      debugger
      return $http.get('http://localhost:3000/users/'+user.id+'/hearts.json')
                  // .then(handleResponse) if the one below doesn't work, revert back
               .then(setLikedRequests)
    }

    function addComment(id, data) {
      debugger
      var req = {
        method: 'POST',
        url: 'http://localhost:3000/lecture_requests/'+id+'/comment',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          id: id,
          comment: data
        }
      }

      return $http(req)
                .then(refresh)
                .catch(handleError)
    }

    // This function is used to refresh allRequests. After a comment is submitted this should trigger
    function refresh() {
      LectureRequestsFactory.allRequests = [];
      getRequests();
    }

    function createRequest(request) {
      debugger
      var req = {
        method: 'POST',
        url: 'http://localhost:3000/lecture_requests',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          lecture_request: request
        }
      }

      return $http(req)
                .catch(handleError)

    }

    function updateRequest() {
      // post the data then assign it to the $scope
    }

    function handleResponse(response){
      console.log(response);
      return response.data;
    }

    function handleError(response) {
      console.log(response);
    }

    // This function can be called from a view to return the service's current requests
    function requests() {
      return vm.allRequests;
    }

    // This is a callback function that stores a response and sets it as the service's allRequests
    function setRequests(data) {
      debugger
      var requests = data.data;
      for (var i = 0; i < requests.length; i++) {
        requests[i]
        debugger
        // pushing the response data into allRequests
        LectureRequestsFactory.allRequests.push({id: requests[i].id, content: requests[i].content, title: requests[i].title, comments: requests[i].comments, user_likes: requests[i].user_likes})
      }
    }

    // This is a callback function that stores a response and sets it as the service's userRequests
    function setUserRequests(data) {
      debugger
      var requests = data.data;
      for (var i = 0; i < requests.length; i++) {
        requests[i]
        debugger
        // pushing the response data into userRequests
        LectureRequestsFactory.userRequests.push({id: requests[i].id, content: requests[i].content, title: requests[i].title, comments: requests[i].comments, user_likes: requests[i].user_likes})
      }
    }

    // This function can be called from a view to return the service's current userRequests but may no longer be needed
    // function allUserRequests() {
    //   return vm.userRequests;
    // }

    function setLikedRequests(data) {
      debugger
      return vm.hearts = data;
    }

  }

  angular
    .module('lecture_requester')  
    .factory('LectureRequestsFactory', LectureRequestsFactory)

}())
